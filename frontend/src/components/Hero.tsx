import React from 'react'
import './Hero.css'

export default function Hero(): JSX.Element {
  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
        <div className="hero-tag">QA Automation Engineer</div>
        <h1 className="hero-name">
          <span className="hero-name-desktop">
            Abhishek<br/><span className="accent">Kumar</span><br/>Pandey
          </span>
          <span className="hero-name-mobile">
            Abhishek<br/><span className="accent pandey-accent">Pandey</span>
          </span>
        </h1>
        <p className="hero-title">
          Playwright · TypeScript · CI/CD · API Testing <span className="cursor"></span>
        </p>
        <p className="hero-desc">
          Building scalable test automation frameworks that ship quality software faster.
          2 years turning manual regression into zero-touch pipelines — with Playwright,
          REST Assured, Azure DevOps, and a bit of AI-assisted magic.
        </p>
        <div className="hero-cta">
          <a href="#experience" className="btn btn-primary">↓ View Experience</a>
          <a href="mailto:abhishekkumar9304843750@gmail.com" className="btn btn-ghost">Get in Touch</a>
        </div>
      </div>

      <div className="hero-terminal">
        <div className="term-bar">
          <div className="term-dot td-r"></div>
          <div className="term-dot td-y"></div>
          <div className="term-dot td-g"></div>
          <span className="term-title">test-runner.sh</span>
        </div>
        <div className="term-body">
          <div className="type-line tl1"><span className="tc-g">$</span> <span className="tc-w">npx playwright test --reporter=html</span></div>
          <div className="type-line tl2"><span className="tc-m">Running 120 tests using 4 workers</span></div>
          <div className="type-line tl3">&nbsp;</div>
          <div className="type-line tl4"><span className="tc-g">✓</span> <span className="tc-m">auth.spec.ts (12 tests)</span></div>
          <div className="type-line tl5"><span className="tc-g">✓</span> <span className="tc-m">api-endpoints.spec.ts (34 tests)</span></div>
          <div className="type-line tl6"><span className="tc-g">✓</span> <span className="tc-m">e2e-checkout.spec.ts (22 tests)</span></div>
          <div className="type-line tl7"><span className="tc-g">✓</span> <span className="tc-m">cross-browser.spec.ts (52 tests)</span></div>
          <div className="type-line tl8">&nbsp;</div>
          <div className="type-line tl9"><span className="tc-g">120 passed</span> <span className="tc-m">(flakiness: &lt;4%)</span> <span className="tc-a">10s</span></div>
        </div>
      </div>
    </section>
  )
}
