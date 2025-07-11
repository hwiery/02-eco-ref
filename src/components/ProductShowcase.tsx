import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";

const ProductShowcase = () => {
  const products = [
    {
      id: "1",
      name: "프리미엄 무선 이어폰",
      price: "₩299,000",
      originalPrice: "₩399,000",
      image: "/placeholder-product.jpg",
      category: "테크",
      isNew: true,
      isOnSale: true
    },
    {
      id: "2", 
      name: "미니멀 스마트 워치",
      price: "₩459,000",
      image: "/placeholder-product.jpg",
      category: "라이프스타일",
      isBestSeller: true
    },
    {
      id: "3",
      name: "울트라 포터블 충전기",
      price: "₩89,000",
      originalPrice: "₩119,000",
      image: "/placeholder-product.jpg", 
      category: "테크",
      isOnSale: true
    },
    {
      id: "4",
      name: "프리미엄 가죽 케이스",
      price: "₩159,000",
      image: "/placeholder-product.jpg",
      category: "패션",
      isNew: true
    },
    {
      id: "5",
      name: "스마트 홈 허브",
      price: "₩329,000",
      image: "/placeholder-product.jpg",
      category: "라이프스타일",
      isBestSeller: true
    },
    {
      id: "6",
      name: "무선 키보드 & 마우스",
      price: "₩199,000",
      originalPrice: "₩259,000",
      image: "/placeholder-product.jpg",
      category: "테크",
      isOnSale: true
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
            인기 제품
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            고객들이 가장 사랑하는 제품들을 만나보세요. 엄선된 품질과 세련된 디자인이 만나다.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["전체", "신제품", "베스트셀러", "특가상품"].map((category) => (
            <Button
              key={category}
              variant={category === "전체" ? "default" : "apple"}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Button variant="apple" size="lg" className="rounded-full">
            더 많은 제품 보기
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;