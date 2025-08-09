
"use client";

import { useState, useEffect } from 'react';
import { getCategory, getProductsBySubcategory, Product, Subcategory, getProductsByCategory, Category } from '@/lib/products';
import { ProductCard } from '@/components/ProductCard';
import { notFound, useSearchParams, useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, Filter, LayoutGrid, List } from 'lucide-react';
import { FilterSidebar } from '@/components/FilterSidebar';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from '@/lib/utils';
import { ProductListItem } from '@/components/ProductListItem';
import Image from 'next/image';
import { Tabs as UiTabs, TabsList, TabsTrigger } from "@/components/ui/tabs"


type CategoryPageProps = {
  params: {
    category: string;
  };
};

export default function CategoryPage({ params }: CategoryPageProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const subcategoryParam = searchParams.get('subcategory');
  const tagsParam = searchParams.get('tags');
  const tabParam = searchParams.get('tab');

  const [products, setProducts] = useState<Product[]>([]);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [layout, setLayout] = useState<'grid' | 'list'>('grid');
  const [category, setCategory] = useState<Category | null | undefined>(undefined);

  const selectedTags = tagsParam ? tagsParam.split(',') : [];

  useEffect(() => {
    const categorySlug = params?.category;
    const categoryData = getCategory(categorySlug);
    setCategory(categoryData);

    if (categoryData) {
      let filteredProducts: Product[];
      if (subcategoryParam) {
        filteredProducts = getProductsBySubcategory(categoryData.slug, subcategoryParam);
      } else {
        filteredProducts = getProductsByCategory(categoryData.slug);
      }

      if (tabParam) {
        filteredProducts = filteredProducts.filter(p => p.tabs?.some(t => t.slug === tabParam));
      }

      if (selectedTags.length > 0) {
        filteredProducts = filteredProducts.filter(p =>
          p.tags?.some(t => selectedTags.includes(t.slug))
        );
      }

      setProducts(filteredProducts);
    }
  }, [params?.category, subcategoryParam, tagsParam, tabParam]);


  if (category === undefined) {
    return null; // or a loading spinner
  }

  if (!category) {
    notFound();
  }

  const activeSubcategory = subcategoryParam
    ? category.subcategories?.find(s => s.slug === subcategoryParam)
    : null;

  const activeSubcategoryName = activeSubcategory?.name || category.name;

  const currentSubcategoryImage = activeSubcategory?.image || category.image;

  const hasSubcategories = category.subcategories && category.subcategories.length > 0;

  const handleTabChange = (value: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    if (value === 'all') {
      current.delete('tab');
    } else {
      current.set('tab', value);
    }
    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.push(`${pathname}${query}`);
  };

  const tabs = activeSubcategory?.tabs || [];

  document.title = "Products | R-3"

  return (
    <div className='bg-[#211e1ec7]'>
      <section className="relative bg-card/50 py-20 md:py-32">
        <div className="absolute inset-0">
          <Image
            src={currentSubcategoryImage}
            alt={activeSubcategoryName}
            data-ai-hint={category.dataAiHint}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/80 z-10" />
        </div>
        <div className="container mx-auto px-4 relative z-20 text-center">
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary">{activeSubcategoryName}</h1>
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            {activeSubcategory?.description || category.description}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <div className="flex items-center text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-4 w-4 mx-1" />
            <Link href="/products" className="hover:text-primary">Products</Link>
            {/* <ChevronRight className="h-4 w-4 mx-1" /> */}
            {/* <span className="text-foreground">{category.name}</span> */}
            {subcategoryParam && activeSubcategory && (
              <>
                <ChevronRight className="h-4 w-4 mx-1" />
                <span className="text-foreground">{activeSubcategory.name}</span>
              </>
            )}
            {tagsParam && (
              <>
                <ChevronRight className="h-4 w-4 mx-1" />
                <span className="text-foreground">Filtered by Tags</span>
              </>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          {hasSubcategories && (
            <>
              <aside className="w-full md:w-1/4 lg:w-1/5 hidden md:block sticky top-24">
                <FilterSidebar
                  category={category}
                  activeSubcategory={subcategoryParam}
                  activeTags={selectedTags}
                />
              </aside>

            </>
          )}

          <main className={hasSubcategories ? "w-full md:w-3/4 lg:w-4/5" : "w-full"}>
            <div className="flex justify-between items-center mb-8">
              <div className='flex items-center'>
                {hasSubcategories && (<div className="md:hidden">
                  <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                    <SheetTrigger asChild>
                      <Button variant="outline" className="w-full">
                        <Filter className="mr-2 h-4 w-4" />
                        Filter Products
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[300px] p-0">
                      <div onClick={() => setIsSheetOpen(false)}>
                        <FilterSidebar
                          category={category}
                          activeSubcategory={subcategoryParam}
                          activeTags={selectedTags}
                        />
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>)}
              </div>
              <div className="flex items-center gap-2">
                <Button variant={layout === 'grid' ? 'secondary' : 'ghost'} size="icon" onClick={() => setLayout('grid')} aria-label="Grid View">
                  <LayoutGrid className="h-5 w-5" />
                </Button>
                <Button variant={layout === 'list' ? 'secondary' : 'ghost'} size="icon" onClick={() => setLayout('list')} aria-label="List View">
                  <List className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {tabs.length > 0 && (
              <div className="mb-8 mx-auto">
                <UiTabs defaultValue={tabParam || 'all'} onValueChange={handleTabChange} className='text-center md:text-left'>
                  <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>
                    {tabs.map((tab) => (
                      <TabsTrigger key={tab.slug} value={tab.slug}>{tab.title}</TabsTrigger>
                    ))}
                  </TabsList>
                </UiTabs>
              </div>
            )}

            {products.length > 0 ? (
              <div className={cn(
                "transition-all duration-300",
                layout === 'grid'
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6'
                  : 'flex flex-col gap-6'
              )}>
                {products.map((product) => (
                  layout === 'grid' ? (
                    <ProductCard key={product.id} product={product} />
                  ) : (
                    <ProductListItem key={product.id} product={product} />
                  )
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <h2 className="text-2xl font-headline">No Products Found</h2>
                <p className="text-muted-foreground mt-2">Try adjusting your filters.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
