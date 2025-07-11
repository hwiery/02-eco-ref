const Footer = () => {
  const footerSections = [
    {
      title: "제품",
      links: [
        { name: "라이프스타일", href: "/lifestyle" },
        { name: "테크", href: "/tech" },
        { name: "패션", href: "/fashion" },
        { name: "스페셜", href: "/special" }
      ]
    },
    {
      title: "고객지원",
      links: [
        { name: "고객센터", href: "/support" },
        { name: "배송정보", href: "/shipping" },
        { name: "반품/교환", href: "/returns" },
        { name: "FAQ", href: "/faq" }
      ]
    },
    {
      title: "회사",
      links: [
        { name: "회사소개", href: "/about" },
        { name: "채용정보", href: "/careers" },
        { name: "투자자정보", href: "/investors" },
        { name: "뉴스룸", href: "/news" }
      ]
    },
    {
      title: "법적고지",
      links: [
        { name: "이용약관", href: "/terms" },
        { name: "개인정보처리방침", href: "/privacy" },
        { name: "쿠키정책", href: "/cookies" },
        { name: "사이트맵", href: "/sitemap" }
      ]
    }
  ];

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground tracking-tight">
                  Store
                </h2>
                <p className="text-muted-foreground mt-2 leading-relaxed">
                  라이프스타일을 재정의하는 프리미엄 제품들
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">뉴스레터 구독</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    최신 소식과 특별 혜택을 받아보세요
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="이메일 주소"
                      className="flex-1 px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                    <button className="px-4 py-2 bg-accent text-accent-foreground rounded-lg text-sm font-medium hover:bg-accent-hover transition-colors">
                      구독
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h3 className="font-semibold text-foreground">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © 2024 Store. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">팔로우하기:</span>
              <div className="flex gap-3">
                {["Instagram", "Facebook", "Twitter", "YouTube"].map((social) => (
                  <a
                    key={social}
                    href={`#${social.toLowerCase()}`}
                    className="w-8 h-8 bg-card-elevated border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-all text-xs"
                  >
                    {social[0]}
                  </a>
                ))}
              </div>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">결제방법:</span>
              <div className="flex gap-2">
                {["카드", "페이", "뱅크"].map((payment) => (
                  <div
                    key={payment}
                    className="px-3 py-1 bg-card-elevated border border-border rounded text-xs text-muted-foreground"
                  >
                    {payment}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;