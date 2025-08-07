
"use client"

import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { cn } from "@/lib/utils"
import type { Category } from "@/lib/products"
import { Separator } from "./ui/separator"
import { Checkbox } from "./ui/checkbox"
import { Button } from "./ui/button"

interface FilterSidebarProps {
  category: Category
  activeSubcategory: string | null
  activeTags: string[]
}

export function FilterSidebar({ category, activeSubcategory, activeTags }: FilterSidebarProps) {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const createSubcategoryQueryString = (value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value === params.get('subcategory')) {
      params.delete('subcategory');
    } else {
      params.set('subcategory', value)
    }
    
    // Reset tag and tab filters when subcategory changes
    params.delete('tags');
    params.delete('tab');
    
    return params.toString()
  }
  
  const handleTagChange = (checked: boolean | "indeterminate", tagSlug: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const currentTags = params.get('tags')?.split(',') || [];
    
    let newTags: string[];
    if (checked) {
      newTags = [...currentTags, tagSlug];
    } else {
      newTags = currentTags.filter(t => t !== tagSlug);
    }

    if (newTags.length > 0) {
      params.set('tags', newTags.join(','));
    } else {
      params.delete('tags');
    }
    
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }

  const clearTags = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete('tags');
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }

  const currentSubcategory = category.subcategories?.find(s => s.slug === activeSubcategory);
  const tags = currentSubcategory?.tags || [];

  return (
    <div className="p-6 rounded-lg h-[100vh]" style={{
      backgroundImage: 'url(/img/vector/product-aside-bg.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'scroll',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundBlendMode: 'color',
      backgroundColor: '#000000ab'
    }}>
      <h3 className="font-headline text-2xl font-semibold text-primary mb-6">Filter by</h3>
      <div className="space-y-6">
        <div>
          <h4 className="font-semibold mb-3 text-lg">Categories</h4>
          <nav className="space-y-2">
            <Link
              href={pathname}
              className={cn(
                "block w-full text-left px-4 py-2 rounded-md transition-colors text-muted-foreground",
                !activeSubcategory 
                  ? "bg-accent text-accent-foreground font-semibold" 
                  : "hover:bg-accent/50"
              )}
              scroll={false}
            >
              All Categories
            </Link>
            {category.subcategories?.map((sub) => (
              <div key={sub.slug}>
                <Link
                  href={`${pathname}?${createSubcategoryQueryString(sub.slug)}`}
                  scroll={false}
                  className={cn(
                    "block w-full text-left px-4 py-2 rounded-md transition-colors text-muted-foreground",
                    activeSubcategory === sub.slug 
                      ? "bg-accent text-accent-foreground font-semibold" 
                      : "hover:bg-accent/50"
                  )}
                >
                  {sub.name}
                </Link>
              </div>
            ))}
          </nav>
        </div>
        
        {tags.length > 0 && (
          <>
            <Separator className="my-6" />
             <div>
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-semibold text-lg">Style</h4>
                  {activeTags.length > 0 && (
                      <Button variant="ghost" size="sm" onClick={clearTags} className="text-xs h-auto p-1 text-primary hover:text-primary">
                          Clear all
                      </Button>
                  )}
                </div>
                <div className="space-y-3">
                  {tags.map((tag) => (
                    <div key={tag.slug} className="flex items-center space-x-3 p-1">
                      <Checkbox
                        id={`tag-${tag.slug}`}
                        checked={activeTags.includes(tag.slug)}
                        onCheckedChange={(checked) => handleTagChange(checked, tag.slug)}
                        className="h-5 w-5"
                      />
                      <label
                        htmlFor={`tag-${tag.slug}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer text-muted-foreground hover:text-foreground"
                      >
                        {tag.title}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
          </>
        )}
      </div>
    </div>
  )
}
