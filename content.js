// All page text lives here. Any string starting with "[" is a placeholder and is
// highlighted on the page until it is replaced with real content.
// A project field left as "" is not shown. A project's url adds a link to the live site;
// urlLabel replaces the default button text. An experience item's url links its org name.

window.PORTFOLIO = {
  links: {
    resume: ""      // e.g. "resume.pdf", placed next to index.html
  },

  // Images go next to index.html (e.g. "images/project-1.png"). Empty shows none.
  images: ["", "", ""],

  en: {
    pageTitle: "D. Liu — Profile",
    name: "D. Liu",
    nav: { work: "Projects", approach: "Approach", experience: "Experience" },
    hero: {
      eyebrow: "Product / Project Management · University of Tokyo, Class of 2028",
      stages: ["Find", "Define", "Build", "Ship"],
      title: "I find a user's problem, define what to build, then build and ship it.",
      lede: "University of Tokyo undergraduate, graduating in 2028.",
      primary: "View my projects",
      secondary: "Download résumé"
    },
    work: {
      title: "Selected projects",
      labels: { role: "My role", decisions: "Key decisions", result: "Result", visit: "Visit site" },
      items: [
        {
          title: "AI anime review and supervision toolchain",
          meta: "AI Mage · Aug–Nov 2025",
          summary: "An internal AI toolchain that helps review and supervise anime production work, at an AI startup founded by University of Tokyo graduates.",
          role: "Product Engineer Intern. I gathered feature requests, wrote requirements, planned the product roadmap, improved features, and designed the frontend and backend.",
          decisions: "Built features myself to judge scope realistically.",
          result: "",
          url: "https://ai-mage.jp",
          urlLabel: "Company site"
        },
        {
          title: "LLM comment analyzer",
          meta: "LINE Yahoo x SoftBank AI hackathon",
          summary: "A web service for content creators who get many comments but cannot see how fans truly feel. It gathers social media comments, uses an LLM to classify the emotion in each, and produces a visual feedback report.",
          role: "Designed the service and its features, built it in Python, and deployed it myself on AWS EC2, with Cloudflare for traffic management.",
          decisions: "Started from the creator's pain rather than the technology. Kept the service stable as traffic grew, using a reverse proxy, rate limiting and log monitoring.",
          result: "Won the Business Excellence Award.",
          url: "https://www.i-wanna.ai"
        }
      ]
    },
    approach: {
      title: "How I work",
      steps: [
        { title: "Find the problem", text: "I start from the user's pain, as with creators who could not see how fans truly felt." },
        { title: "Define what to build", text: "I turn user requests into requirements, a roadmap and clear priorities." },
        { title: "Build it", text: "I work hands-on across frontend and backend, which helps me judge scope realistically." },
        { title: "Ship and keep it running", text: "I deploy and monitor services myself, and I care about stability as traffic grows." }
      ]
    },
    experience: {
      title: "Experience",
      items: [
        { role: "Product Engineer Intern", org: "AI Mage", dates: "Aug–Nov 2025", text: "Requirements, roadmap, feature improvement, and frontend and backend design for an AI anime review toolchain." },
        { role: "Business Assistant", org: "Tianwen KADOKAWA Animation & Comics", dates: "Jan–Feb 2025", text: "Built a Python AI demo and presented its business uses to staff." },
        { role: "Vice President", org: "Teikakai, University of Tokyo", dates: "Current", text: "Run a student Minecraft server and build its Java plugins and a Python Discord bot.", url: "https://www.teikakai.com" }
      ]
    },
    footer: "© 2026 D. Liu"
  },

  ja: {
    pageTitle: "D. Liu — プロフィール",
    name: "D. Liu",
    nav: { work: "実績", approach: "進め方", experience: "経歴" },
    hero: {
      eyebrow: "プロダクト / プロジェクトマネジメント ・ 東京大学 2028年卒業予定",
      stages: ["見つける", "定義する", "作る", "届ける"],
      title: "ユーザーの課題を見つけ、作るものを定義し、自ら形にして届けます。",
      lede: "東京大学の学部生で、2028年に卒業予定です。",
      primary: "プロジェクトを見る",
      secondary: "履歴書をダウンロード"
    },
    work: {
      title: "主なプロジェクト",
      labels: { role: "担当", decisions: "主な判断", result: "成果", visit: "サイトを見る" },
      items: [
        {
          title: "AIアニメ審査・監修ツールチェーン",
          meta: "AI Mage ・ 2025年8月〜11月",
          summary: "東京大学出身者が創業したAIスタートアップで開発した、アニメ制作の審査と監修を支援する社内向けAIツールチェーンです。",
          role: "プロダクトエンジニアインターンとして、機能要望の収集、要件定義、ロードマップの策定、機能改善、フロントエンドとバックエンドの設計を担当しました。",
          decisions: "開発範囲を現実的に見極めるため、自ら機能を実装しました。",
          result: "",
          url: "https://ai-mage.jp",
          urlLabel: "会社サイトを見る"
        },
        {
          title: "LLMコメント分析サービス",
          meta: "LINEヤフー × ソフトバンク AIハッカソン",
          summary: "多くのコメントを受け取りながらも、ファンの本当の気持ちが見えないコンテンツクリエイター向けのWebサービスです。SNSのコメントを集め、LLMで一件ごとの感情を分類し、視覚的なフィードバックレポートを作成します。",
          role: "サービスと機能を設計し、Pythonで開発しました。AWS EC2へのデプロイも自ら行い、トラフィック管理にはCloudflareを使用しました。",
          decisions: "技術からではなく、クリエイターの悩みから出発しました。リバースプロキシ、レート制限、ログ監視により、トラフィックが増えてもサービスを安定させました。",
          result: "Business Excellence Award を受賞しました。",
          url: "https://www.i-wanna.ai"
        }
      ]
    },
    approach: {
      title: "仕事の進め方",
      steps: [
        { title: "課題を見つける", text: "ファンの本音が見えないクリエイターの例のように、ユーザーの悩みから出発します。" },
        { title: "作るものを定義する", text: "ユーザーの要望を、要件、ロードマップ、優先順位に落とし込みます。" },
        { title: "自ら作る", text: "フロントエンドとバックエンドの両方に手を動かして関わり、開発範囲を現実的に判断します。" },
        { title: "届けて、動かし続ける", text: "デプロイと監視も自ら行い、トラフィックが増えても安定して動くことを重視します。" }
      ]
    },
    experience: {
      title: "経歴",
      items: [
        { role: "プロダクトエンジニアインターン", org: "AI Mage", dates: "2025年8月〜11月", text: "AIアニメ審査ツールチェーンの要件定義、ロードマップ策定、機能改善、フロントエンドとバックエンドの設計。" },
        { role: "ビジネスアシスタント", org: "Tianwen KADOKAWA Animation & Comics", dates: "2025年1月〜2月", text: "PythonでAIデモを作成し、社員向けにビジネス活用法を発表。" },
        { role: "副代表", org: "東京大学棣華会", dates: "現在", text: "学生向けMinecraftサーバーの運営、Javaプラグインと Python製Discordボットの開発。", url: "https://www.teikakai.com" }
      ]
    },
    footer: "© 2026 D. Liu"
  }
};
