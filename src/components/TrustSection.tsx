const TrustSection = () => {
  const features = [
    {
      title: "무료 배송",
      description: "10만원 이상 구매시",
      icon: "🚚"
    },
    {
      title: "30일 무료 반품",
      description: "만족하지 않으면 100% 환불",
      icon: "↩️"
    },
    {
      title: "1년 품질보증",
      description: "모든 제품 품질보증 서비스",
      icon: "🛡️"
    },
    {
      title: "24/7 고객지원",
      description: "언제든 도움이 필요할 때",
      icon: "💬"
    }
  ];

  const testimonials = [
    {
      name: "김민수",
      rating: 5,
      comment: "정말 만족스러운 품질입니다. Apple 제품만큼이나 세련된 디자인이에요.",
      product: "프리미엄 무선 이어폰"
    },
    {
      name: "이소영",
      rating: 5,
      comment: "배송도 빠르고 포장도 깔끔했어요. 재구매 의사 100%입니다!",
      product: "미니멀 스마트 워치"
    },
    {
      name: "박준혁",
      rating: 5,
      comment: "가격 대비 성능이 뛰어나네요. 친구들에게도 추천했습니다.",
      product: "울트라 포터블 충전기"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Features */}
        <div className="mb-20">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              안심하고 쇼핑하세요
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              고객의 만족이 우리의 최우선입니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="text-center space-y-4 p-6 rounded-2xl bg-card-elevated shadow-minimal hover:shadow-card transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Reviews */}
        <div>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              고객 후기
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              실제 고객들의 생생한 후기를 확인해보세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-card rounded-3xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 space-y-6 animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-warning text-lg">★</span>
                  ))}
                </div>

                {/* Comment */}
                <blockquote className="text-foreground leading-relaxed">
                  "{testimonial.comment}"
                </blockquote>

                {/* Customer Info */}
                <div className="space-y-2 pt-4 border-t border-border">
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.product} 구매
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;