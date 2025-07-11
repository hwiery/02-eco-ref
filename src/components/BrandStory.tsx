import { Button } from "@/components/ui/button";

const BrandStory = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-accent font-medium text-sm tracking-wider uppercase">
                  우리의 이야기
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight">
                  디자인과 기능의
                  <br />
                  완벽한 조화
                </h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Apple의 디자인 철학에서 영감을 받아, 우리는 단순함 속에 숨겨진 
                  깊이 있는 기능성을 추구합니다. 모든 제품은 사용자의 일상을 
                  더욱 의미 있게 만들어줍니다.
                </p>
                <p>
                  혁신적인 기술과 세련된 디자인의 만남. 그것이 바로 우리가 
                  추구하는 가치입니다. 당신의 라이프스타일에 완벽하게 
                  어우러지는 제품을 경험해보세요.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="premium" size="lg" className="group">
                브랜드 스토리 더보기
                <div className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                  →
                </div>
              </Button>
              <Button variant="apple" size="lg">
                제품 카탈로그
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-foreground">15+</div>
                <div className="text-sm text-muted-foreground">년간 경험</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">프리미엄 제품</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">글로벌 브랜드</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-scale-in">
            <div className="relative z-10">
              {/* Main card */}
              <div className="bg-card rounded-3xl shadow-premium overflow-hidden">
                <div className="aspect-[4/5] bg-gradient-to-br from-accent/5 to-primary/5 p-8 flex flex-col justify-between">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center">
                        <div className="w-6 h-6 bg-background rounded-lg"></div>
                      </div>
                      <div className="space-y-1">
                        <div className="h-3 bg-foreground/20 rounded-full w-24"></div>
                        <div className="h-2 bg-foreground/10 rounded-full w-16"></div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="h-4 bg-foreground/20 rounded-full"></div>
                      <div className="h-4 bg-foreground/15 rounded-full w-4/5"></div>
                      <div className="h-4 bg-foreground/10 rounded-full w-3/5"></div>
                    </div>
                  </div>

                  <div className="flex justify-between items-end">
                    <div className="space-y-2">
                      <div className="h-6 bg-accent/30 rounded-full w-20"></div>
                      <div className="h-3 bg-foreground/10 rounded-full w-16"></div>
                    </div>
                    <div className="w-10 h-10 bg-accent/20 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-card rounded-3xl shadow-card flex items-center justify-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl"></div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-success/10 rounded-3xl shadow-minimal"></div>
            </div>

            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-10 right-10 w-40 h-40 bg-accent/5 rounded-full blur-2xl"></div>
              <div className="absolute bottom-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;