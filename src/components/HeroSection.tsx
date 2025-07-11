import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[url('/nasa-Q1p7bh3SHj8-unsplash.jpg')] bg-cover bg-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 min-h-[80vh] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            {/* Content */}
            <div className="text-center lg:text-left space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">
                  라이프스타일을
                  <br />
                  <span className="text-accent">재정의하다</span>
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  당신의 일상을 더욱 특별하게 만들어줄 프리미엄 제품들을 만나보세요.
                  Apple의 철학이 담긴 디자인과 품질.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="hero" size="lg" className="group">
                  지금 쇼핑하기
                  <div className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </div>
                </Button>
                <Button variant="apple" size="lg">
                  제품 둘러보기
                </Button>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8">
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-foreground">10,000+</div>
                  <div className="text-sm text-muted-foreground">만족한 고객</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-foreground">99.8%</div>
                  <div className="text-sm text-muted-foreground">고객 만족도</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-foreground">24시간</div>
                  <div className="text-sm text-muted-foreground">빠른 배송</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative lg:ml-auto animate-scale-in">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-premium bg-card-elevated">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src="/nasa-Q1p7bh3SHj8-unsplash.jpg" alt="Hero Image" className="object-cover w-full h-full" />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-accent/10 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-success/10 rounded-full animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;