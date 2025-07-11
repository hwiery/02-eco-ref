import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  category: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  isOnSale?: boolean;
}

const ProductCard = ({ 
  name, 
  price, 
  originalPrice, 
  image, 
  category, 
  isNew = false,
  isBestSeller = false,
  isOnSale = false 
}: ProductCardProps) => {
  return (
    <div className="group relative bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {isNew && (
          <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
            NEW
          </span>
        )}
        {isBestSeller && (
          <span className="bg-warning text-background px-3 py-1 rounded-full text-xs font-medium">
            BEST
          </span>
        )}
        {isOnSale && (
          <span className="bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-xs font-medium">
            SALE
          </span>
        )}
      </div>

      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-muted to-secondary">
        {/* Placeholder for product image */}
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-24 h-24 bg-primary/10 rounded-2xl flex items-center justify-center">
            <div className="w-12 h-12 bg-primary/20 rounded-xl"></div>
          </div>
        </div>
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button variant="secondary" size="sm" className="transform scale-95 group-hover:scale-100 transition-transform duration-200">
            <ShoppingCart className="w-4 h-4 mr-2" />
            장바구니
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground font-medium">{category}</p>
          <h3 className="text-lg font-semibold text-foreground leading-tight group-hover:text-accent transition-colors duration-200">
            {name}
          </h3>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-foreground">{price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">{originalPrice}</span>
            )}
          </div>
          
          <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <ShoppingCart className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;