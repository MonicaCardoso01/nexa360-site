const header = document.getElementById('siteHeader');
const progress = document.getElementById('scrollProgress');
const menuToggle = document.getElementById('menuToggle');
const mobilePanel = document.getElementById('mobilePanel');
const form = document.getElementById('contactForm');
const modal = document.getElementById('successModal');
const closeModal = document.getElementById('closeModal');
const articleModal = document.getElementById('articleModal');
const closeArticleModal = document.getElementById('closeArticleModal');
const articleModalCategory = document.getElementById('articleModalCategory');
const articleModalTime = document.getElementById('articleModalTime');
const articleModalTitle = document.getElementById('articleModalTitle');
const articleModalBody = document.getElementById('articleModalBody');
const articleConversation = document.getElementById('articleConversation');
const legalModal = document.getElementById('legalModal');
const closeLegalModal = document.getElementById('closeLegalModal');
const legalModalTitle = document.getElementById('legalModalTitle');
const legalModalBody = document.getElementById('legalModalBody');
const articleRows = [...document.querySelectorAll('[data-article]')];
const knowledgeToggle = document.getElementById('knowledgeToggle');
const extraArticleRows = [...document.querySelectorAll('.article-row-extra')];
const languageButtons = [...document.querySelectorAll('[data-lang]')];
const valueButtons = [...document.querySelectorAll('[data-value]')];
const valuePanels = [...document.querySelectorAll('[data-value-panel]')];
const sectionIds = ['inicio', 'sobre', 'solucoes', 'metodo', 'casos', 'conhecimento', 'faq', 'contacto'];
const dialogElements = [articleModal, modal, legalModal];
const dialogReturnFocus = new WeakMap();
const focusableSelector = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

const translations = {
  "en": {
    "Início": "Home",
    "Quem Somos": "About Us",
    "Soluções": "Solutions",
    "Método": "Method",
    "Transformações": "Transformations",
    "Conhecimento": "Knowledge",
    "FAQs": "FAQs",
    "Perguntas frequentes": "Frequently asked questions",
    "Clareza antes de começarmos.": "Clarity before we begin.",
    "Respostas diretas sobre a NEXA360, o Diagnóstico 360° e a forma como uma colaboração é preparada.": "Direct answers about NEXA360, the 360° Diagnosis, and how an engagement is prepared.",
    "O que é a NEXA360?": "What is NEXA360?",
    "A NEXA360 é um projeto de consultoria empresarial orientado para diagnóstico, estratégia, processos, CRM, inteligência artificial, crescimento e internacionalização, com atenção à sustentabilidade e ao valor humano.": "NEXA360 is a business consulting project focused on diagnosis, strategy, processes, CRM, artificial intelligence, growth, and internationalisation, with attention to sustainability and human value.",
    "A NEXA360 já iniciou oficialmente a atividade?": "Has NEXA360 officially started operating?",
    "Ainda não. O projeto encontra-se em desenvolvimento e a abertura oficial está prevista para depois de novembro de 2026. Nesta fase, o website é institucional e demonstrativo.": "Not yet. The project is under development and its official launch is planned for after November 2026. At this stage, the website is institutional and demonstrative.",
    "O que inclui o Diagnóstico 360°?": "What does the 360° Diagnosis include?",
    "Inclui recolha estruturada de informação, análise das áreas críticas, identificação de riscos e oportunidades, definição de prioridades e um plano de ação com responsáveis, prazos e indicadores. O âmbito final é confirmado por proposta escrita.": "It includes structured information gathering, analysis of critical areas, identification of risks and opportunities, priorities, and an action plan with owners, deadlines, and indicators. The final scope is confirmed in a written proposal.",
    "Quanto custa e quanto tempo demora?": "How much does it cost and how long does it take?",
    "A edição fundadora apresentada no site prevê uma condição de 650 € acrescida de IVA e entrega em 15 dias úteis, nos termos da proposta aplicável. Outros serviços, calendários e investimentos dependem do âmbito acordado com cada organização.": "The founding edition presented on the website provides for a fee of €650 plus VAT and delivery within 15 working days, under the applicable proposal. Other services, schedules, and fees depend on the scope agreed with each organisation.",
    "Como são definidos pagamento, alterações e cancelamento?": "How are payment, changes, and cancellation defined?",
    "Essas condições são apresentadas antes do início do trabalho, numa proposta ou contrato escrito. Nenhum serviço é iniciado sem aceitação expressa do âmbito, entregáveis, calendário, investimento, forma de pagamento e regras de alteração ou cancelamento.": "These conditions are presented before work begins in a written proposal or contract. No service starts without express acceptance of the scope, deliverables, schedule, fee, payment method, and change or cancellation rules.",
    "A NEXA360 garante resultados comerciais?": "Does NEXA360 guarantee business results?",
    "Não. A NEXA360 compromete-se com método, análise e entregáveis acordados, mas resultados dependem também das decisões, recursos, execução e contexto de cada organização.": "No. NEXA360 commits to the agreed method, analysis, and deliverables, but results also depend on each organisation’s decisions, resources, execution, and context.",
    "A NEXA360 pode apoiar projetos internacionais?": "Can NEXA360 support international projects?",
    "Sim, mediante análise prévia do mercado e do enquadramento aplicável. Projetos na União Europeia, no Espaço Económico Europeu ou em países da CPLP exigem proposta própria, com país de destino, moeda, impostos, responsabilidades, regras de dados e parceiros locais definidos quando necessário.": "Yes, subject to prior analysis of the market and applicable framework. Projects in the European Union, European Economic Area, or CPLP countries require a dedicated proposal defining the destination country, currency, taxes, responsibilities, data rules, and local partners where necessary.",
    "Os dados introduzidos no formulário são guardados?": "Is information entered in the form stored?",
    "Não na versão atual. O formulário é uma demonstração: a informação não sai do navegador nem é guardada pela NEXA360. A política será atualizada antes de qualquer recolha real.": "Not in the current version. The form is a demonstration: information does not leave the browser and is not stored by NEXA360. The policy will be updated before any real collection.",
    "Como posso manifestar interesse ou esclarecer outra questão?": "How can I register interest or ask another question?",
    "Utilize a área de contacto demonstrativa para conhecer a experiência prevista. O canal operacional e os dados comerciais completos serão publicados antes da abertura oficial.": "Use the demonstration contact area to see the intended experience. The operational channel and full business details will be published before the official launch.",
    "Contacto": "Contact",
    "Iniciar uma conversa": "Start a conversation",
    "Estratégia · Tecnologia · Pessoas": "Strategy · Technology · People",
    "O potencial da sua empresa merece mais do que soluções.": "Your company’s potential deserves more than solutions.",
    "Merece transformação.": "It deserves transformation.",
    "Na NEXA360 transformamos desafios em oportunidades, estratégia em crescimento e potencial em resultados duradouros.": "At NEXA360, we turn challenges into opportunities, strategy into growth, and potential into lasting results.",
    "Descobrir a NEXA360": "Discover NEXA360",
    "Mais do que consultoria. Uma parceria de evolução.": "More than consulting. A partnership for evolution.",
    "Visão integrada": "Integrated vision",
    "Soluções à medida": "Tailored solutions",
    "+ impacto": "+ impact",
    "Valor humano": "Human value",
    "sempre": "always",
    "DIAGNÓSTICO": "DIAGNOSIS",
    "ESTRATÉGIA": "STRATEGY",
    "INOVAÇÃO": "INNOVATION",
    "CRESCIMENTO": "GROWTH",
    "Quem somos": "Who we are",
    "Empresas fortes nascem de decisões inteligentes — e de pessoas valorizadas.": "Strong companies are born from intelligent decisions — and valued people.",
    "A NEXA360 é um ecossistema de soluções estratégicas criado para ajudar empresas e pessoas a superar desafios, crescer de forma sustentável e transformar potencial em resultados.": "NEXA360 is an ecosystem of strategic solutions created to help companies and people overcome challenges, grow sustainably, and turn potential into results.",
    "Mais do que consultoria, a NEXA360 foi concebida para ser uma parceira de evolução. A proposta não se limita a recomendações: integra estratégias, ferramentas, processos e oportunidades para acompanhar a evolução de cada organização.": "More than consulting, NEXA360 was conceived as a partner for evolution. Its proposition goes beyond recommendations: it brings together strategies, tools, processes, and opportunities to support each organisation’s evolution.",
    "Acreditamos que empresas extraordinárias são construídas por pessoas valorizadas. Por isso, cuidamos das empresas sem nunca deixar de cuidar das pessoas.": "We believe extraordinary companies are built by valued people. That is why we care for companies without ever ceasing to care for people.",
    "NEXA360 · FILOSOFIA": "NEXA360 · PHILOSOPHY",
    "Ética": "Ethics",
    "Proximidade": "Proximity",
    "Inovação": "Innovation",
    "Resultados": "Results",
    "Princípios NEXA360": "NEXA360 principles",
    "Valores que orientam cada decisão": "Values that guide every decision",
    "Selecione um valor para conhecer o compromisso que o transforma em prática.": "Select a value to discover the commitment that turns it into practice.",
    "Atuamos com transparência, confidencialidade e responsabilidade, sem promessas que não possam ser sustentadas por evidências.": "We act with transparency, confidentiality, and responsibility, without promises that cannot be supported by evidence.",
    "Escutamos antes de propor. Cada solução é construída com a empresa, respeitando a sua realidade, os seus recursos e as suas pessoas.": "We listen before proposing. Each solution is built with the company, respecting its reality, resources, and people.",
    "Aplicamos tecnologia e inteligência artificial quando acrescentam valor real, com segurança, propósito e supervisão humana.": "We apply technology and artificial intelligence when they add real value, with security, purpose, and human oversight.",
    "Transformamos análises em prioridades, planos de ação e indicadores que permitam acompanhar a evolução da empresa.": "We turn analyses into priorities, action plans, and indicators that make it possible to monitor the company’s evolution.",
    "Colocamos as pessoas no centro da transformação, valorizando conhecimento, participação, bem-estar e desenvolvimento.": "We place people at the centre of transformation, valuing knowledge, participation, well-being, and development.",
    "Uma visão 360° para desafios que não cabem em caixas.": "A 360° vision for challenges that do not fit into boxes.",
    "Integramos estratégia, tecnologia, internacionalização, marca e desenvolvimento humano para criar respostas coerentes, aplicáveis e mensuráveis.": "We integrate strategy, technology, internationalisation, brand, and human development to create coherent, actionable, and measurable responses.",
    "Diagnóstico Empresarial 360°": "360° Business Diagnosis",
    "Clareza sobre riscos, oportunidades, prioridades e próximos passos.": "Clarity on risks, opportunities, priorities, and next steps.",
    "Estratégia e Crescimento": "Strategy and Growth",
    "Planeamento, posicionamento e execução para evoluir com consistência.": "Planning, positioning, and execution for consistent evolution.",
    "CRM e Processos": "CRM and Processes",
    "Relações mais inteligentes, operações organizadas e decisões apoiadas por dados.": "Smarter relationships, organised operations, and data-informed decisions.",
    "IA e Transformação Digital": "AI and Digital Transformation",
    "Tecnologia aplicada com propósito, segurança e impacto real.": "Technology applied with purpose, security, and real impact.",
    "Marketing e Marca": "Marketing and Brand",
    "Identidade, comunicação e presença capazes de gerar confiança.": "Identity, communication, and presence that build trust.",
    "Comércio Internacional": "International Trade",
    "Mercados, parceiros e estratégias para crescer além-fronteiras.": "Markets, partners, and strategies to grow beyond borders.",
    "Método NEXA360": "NEXA360 Method",
    "Da compreensão à transformação.": "From understanding to transformation.",
    "Um percurso claro, personalizado e acompanhado — sem soluções genéricas.": "A clear, personalised, and supported journey — without generic solutions.",
    "Diagnosticar": "Diagnose",
    "Compreendemos a realidade, ouvimos as pessoas e identificamos as causas, não apenas os sintomas.": "We understand reality, listen to people, and identify causes — not only symptoms.",
    "Desenhar": "Design",
    "Criamos uma estratégia integrada, realista e alinhada com os recursos e objetivos da organização.": "We create an integrated, realistic strategy aligned with the organisation’s resources and objectives.",
    "Implementar": "Implement",
    "Transformamos o plano em ação, com ferramentas, processos, tecnologia e acompanhamento próximo.": "We turn the plan into action with tools, processes, technology, and close support.",
    "Evoluir": "Evolve",
    "Medimos resultados, aprendemos com os dados e ajustamos continuamente o caminho.": "We measure results, learn from data, and continuously adjust the path.",
    "Casos de Transformação": "Transformation Cases",
    "O valor de uma estratégia mede-se pela mudança que consegue criar.": "The value of a strategy is measured by the change it creates.",
    "Produto próprio": "Proprietary product",
    "Tecnologia & Relações": "Technology & Relationships",
    "Ecossistema inteligente para gerir relações, oportunidades, decisões e crescimento.": "An intelligent ecosystem for managing relationships, opportunities, decisions, and growth.",
    "Projeto estratégico": "Strategic project",
    "Internacionalização de PME": "SME Internationalisation",
    "Modelo integrado de seleção de mercados, entrada internacional, riscos, finanças e KPIs.": "An integrated model for market selection, international entry, risk, finance, and KPIs.",
    "Metodologia própria": "Proprietary methodology",
    "Estratégia": "Strategy",
    "Leitura multidimensional da empresa para transformar complexidade em prioridades claras.": "A multidimensional view of the company that turns complexity into clear priorities.",
    "* Os casos iniciais podem incluir projetos próprios, estratégicos, conceptuais ou académicos, sempre identificados com transparência.": "* Initial cases may include proprietary, strategic, conceptual, or academic projects, always identified transparently.",
    "Centro de Conhecimento": "Knowledge Centre",
    "Conhecimento que não fica no papel. Torna-se decisão.": "Knowledge that does not stay on paper. It becomes decision.",
    "Por que crescer sem direção pode fragilizar uma empresa": "Why growth without direction can weaken a company",
    "Inteligência Artificial": "Artificial Intelligence",
    "Como aplicar IA sem perder o valor humano": "How to apply AI without losing human value",
    "Internacionalização": "Internationalisation",
    "O que uma PME deve validar antes de entrar num novo mercado": "What an SME should validate before entering a new market",
    "Parcerias": "Partnerships",
    "As melhores transformações raramente acontecem a sós.": "The best transformations rarely happen alone.",
    "Procuramos construir relações com empresas, especialistas, instituições, associações e investidores que partilham a nossa visão de crescimento responsável, inovação e valor humano.": "We seek to build relationships with companies, specialists, institutions, associations, and investors who share our vision of responsible growth, innovation, and human value.",
    "Explorar uma parceria": "Explore a partnership",
    "Vamos conversar": "Let’s talk",
    "Toda grande transformação começa com uma conversa.": "Every great transformation starts with a conversation.",
    "Conte-nos o desafio, a ambição ou a ideia. A primeira reunião será um espaço de escuta, clareza e descoberta de possibilidades.": "Tell us about the challenge, ambition, or idea. The first meeting will be a space for listening, clarity, and discovering possibilities.",
    "Escuta atenta · Confidencialidade · Próximos passos claros": "Attentive listening · Confidentiality · Clear next steps",
    "Nome": "Name",
    "Empresa": "Company",
    "E-mail": "Email",
    "Qual é o principal desafio?": "What is the main challenge?",
    "Selecione uma opção": "Select an option",
    "Estratégia e crescimento": "Strategy and growth",
    "CRM e processos": "CRM and processes",
    "Marketing e marca": "Marketing and brand",
    "Comércio internacional": "International trade",
    "Parceria institucional": "Institutional partnership",
    "Outro desafio": "Another challenge",
    "Mensagem": "Message",
    "Enviar pedido de contacto": "Send contact request",
    "Ao enviar, concorda com o tratamento dos dados exclusivamente para responder ao seu pedido.": "By submitting, you agree that your data may be processed exclusively to respond to your request.",
    "Estratégia que transforma. Tecnologia com propósito. Crescimento com valor humano.": "Strategy that transforms. Technology with purpose. Growth with human value.",
    "© 2026 NEXA360. Todos os direitos reservados.": "© 2026 NEXA360. All rights reserved.",
    "Privacidade": "Privacy",
    "Termos": "Terms",
    "Internacional": "International",
    "Mensagem recebida.": "Message received.",
    "Obrigada pelo contacto. Este formulário está preparado para futura integração com o CRM NEXA360.": "Thank you for contacting us. This form is ready for future integration with NEXA360 CRM.",
    "Ajudamos micro, pequenas e médias empresas a diagnosticar problemas, organizar processos e transformar decisões em crescimento sustentável — combinando estratégia, tecnologia e valor humano.": "We help micro, small, and medium-sized businesses diagnose problems, organise processes, and turn decisions into sustainable growth — combining strategy, technology, and human value.",
    "Conhecer o Diagnóstico 360°": "Explore the 360° Diagnosis",
    "Conhecer o Programa Empresas Fundadoras": "Explore the Founding Companies Programme",
    "Explorar o Diagnóstico 360°": "Explore the 360° Diagnosis",
    "Candidatar a minha empresa": "Apply with my company",
    "Manifestar interesse": "Register interest",
    "Manifestar interesse na edição fundadora": "Register interest in the founding edition",
    "A NEXA360 é um projeto empresarial em fase de preparação, desenvolvido sob a responsabilidade de Mônica Cardoso. A abertura oficial da atividade está prevista para depois de novembro de 2026.": "NEXA360 is a business project in preparation, developed under the responsibility of Mônica Cardoso. The official start of activity is planned for after November 2026.",
    "Informação de planeamento: a abertura oficial da atividade e das candidaturas está prevista para depois de novembro de 2026. Até essa data, o programa encontra-se em preparação e recebe apenas manifestações de interesse.": "Planning information: the official start of activity and applications is expected after November 2026. Until then, the programme is in preparation and only accepts expressions of interest.",
    "Contacto e manifestações de interesse": "Contact and expressions of interest",
    "© 2026 NEXA360 — Projeto empresarial em desenvolvimento. Responsável pelo projeto: Mônica Cardoso.": "© 2026 NEXA360 — Business project under development. Project lead: Mônica Cardoso.",
    "Estratégia de alto nível, pensada para a realidade das PME.": "High-level strategy, designed for the reality of SMEs.",
    "Para quem foi pensada": "Who it was designed for",
    "A dimensão da empresa não limita a dimensão do seu potencial.": "A company’s size does not limit the scale of its potential.",
    "O nosso foco são micro, pequenas e médias empresas que precisam de transformar informação dispersa, desafios operacionais ou ambição de crescimento em prioridades claras e decisões executáveis.": "Our focus is on micro, small, and medium-sized businesses that need to turn scattered information, operational challenges, or growth ambition into clear priorities and executable decisions.",
    "Falta de clareza sobre prioridades": "Lack of clarity about priorities",
    "Processos comerciais desorganizados": "Disorganised commercial processes",
    "Crescimento sem indicadores consistentes": "Growth without consistent indicators",
    "Decisões de expansão por validar": "Expansion decisions requiring validation",
    "Áreas de atuação": "Areas of expertise",
    "Começamos pela clareza. Evoluímos para a execução.": "We begin with clarity. We progress to execution.",
    "O Diagnóstico Empresarial 360° é a nossa porta de entrada. A partir das prioridades identificadas, mobilizamos as competências certas em três áreas complementares.": "The 360° Business Diagnosis is our starting point. Based on the priorities identified, we mobilise the right expertise across three complementary areas.",
    "Serviço de entrada": "Starting service",
    "Diagnóstico e Estratégia": "Diagnosis and Strategy",
    "Compreensão integrada da empresa, definição de prioridades e plano de ação mensurável.": "An integrated understanding of the business, priority setting, and a measurable action plan.",
    "Processos, CRM e IA": "Processes, CRM, and AI",
    "Operações organizadas, relações comerciais acompanhadas e tecnologia aplicada com segurança e propósito.": "Organised operations, monitored commercial relationships, and technology applied safely and purposefully.",
    "Crescimento e Internacionalização": "Growth and Internationalisation",
    "Posicionamento, mercados, parceiros e decisões de expansão sustentadas por evidência.": "Positioning, markets, partners, and expansion decisions supported by evidence.",
    "Serviço principal": "Flagship service",
    "Uma análise estruturada para transformar complexidade em prioridades claras, decisões fundamentadas e um plano de ação adequado à realidade da empresa.": "A structured analysis that turns complexity into clear priorities, evidence-based decisions, and an action plan suited to the company’s reality.",
    "dias úteis": "business days",
    "visão integrada": "integrated view",
    "plano priorizado": "prioritised plan",
    "Conhecer a edição fundadora": "Explore the founding edition",
    "O que a empresa recebe": "What the company receives",
    "Reunião de diagnóstico e recolha orientada de informação": "Diagnostic meeting and guided information gathering",
    "Análise integrada de estratégia, operação, comercial, pessoas e tecnologia": "Integrated analysis of strategy, operations, commercial activity, people, and technology",
    "Mapa de riscos, oportunidades e prioridades": "Map of risks, opportunities, and priorities",
    "Plano de ação de 90 dias com responsáveis e indicadores": "90-day action plan with owners and indicators",
    "Reunião executiva de apresentação e próximos passos": "Executive presentation and next-steps meeting",
    "Programa Empresas Fundadoras": "Founding Companies Programme",
    "Três PME. Um diagnóstico rigoroso. Uma condição de lançamento.": "Three SMEs. One rigorous diagnosis. A launch condition.",
    "Selecionaremos três micro ou PME com atividade em Portugal ou com um projeto concreto de entrada, investimento ou expansão no mercado português. A condição fundadora permite validar e aperfeiçoar o método com empresas reais, sem reduzir a profundidade ou a qualidade da entrega.": "We will select three micro-businesses or SMEs operating in Portugal or with a concrete project to enter, invest in, or expand into the Portuguese market. The founding condition allows us to validate and refine the method with real companies, without reducing the depth or quality of the delivery.",
    "Confidencialidade obrigatória. Qualquer testemunho ou caso de estudo será opcional e publicado apenas com autorização expressa.": "Confidentiality is mandatory. Any testimonial or case study will be optional and published only with explicit authorisation.",
    "3 vagas · sujeitas a seleção": "3 places · subject to selection",
    "Condição especial da edição fundadora": "Special founding-edition condition",
    "Valor previsto para edições posteriores: 950 € + IVA": "Expected value for later editions: €950 + VAT",
    "650 €": "€650",
    "+ IVA": "+ VAT",
    "Micro ou PME com atividade, investimento ou projeto de expansão ligado a Portugal": "Micro-business or SME with operations, investment, or an expansion project connected to Portugal",
    "Conclusão em 15 dias úteis": "Completion within 15 business days",
    "Entrega integral do Diagnóstico 360°": "Full delivery of the 360° Diagnosis",
    "Candidatura sem compromisso": "No-obligation application",
    "Depois das três vagas:": "After the three places:",
    "as empresas interessadas poderão integrar a lista de espera ou manifestar interesse numa edição posterior, sem qualquer compromisso.": "interested companies may join the waiting list or register interest in a later edition, with no commitment.",
    "Projetos e soluções": "Projects and solutions",
    "Construímos evidência com transparência — sem apresentar conceitos como resultados de clientes.": "We build evidence transparently — without presenting concepts as client results.",
    "Demonstração tecnológica": "Technology demonstration",
    "Protótipo funcional público, com dados fictícios, para demonstrar gestão comercial multilingue. A versão privada segura será uma fase posterior de desenvolvimento.": "A public functional prototype using fictional data to demonstrate multilingual commercial management. A secure private version will be a later development phase.",
    "* Nesta fase, apresentamos projetos próprios, metodologias e demonstrações identificados pela sua natureza. Os primeiros resultados de clientes serão publicados apenas com autorização.": "* At this stage, we present proprietary projects, methodologies, and demonstrations clearly identified by their nature. Initial client results will be published only with authorisation.",
    "Ambiente público com dados exclusivamente fictícios.": "Public environment using exclusively fictional data.",
    "Explorar demonstração": "Explore the demonstration",
    "Conversar sobre internacionalização": "Discuss internationalisation",
    "Ver Diagnóstico 360°": "View the 360° Diagnosis",
    "Como trabalhamos com transparência": "How we work transparently",
    "Rigor significa tornar claros o contexto, os critérios e os limites.": "Rigour means making the context, criteria, and boundaries clear.",
    "Reunimos aqui os princípios que orientam as estimativas, a informação empresarial e qualquer futura relação comercial.": "Here we bring together the principles that guide estimates, business information, and any future commercial relationship.",
    "Enquadramento claro": "Clear context",
    "A NEXA360 é um projeto empresarial em preparação, com abertura oficial prevista para depois de novembro de 2026.": "NEXA360 is a business project in preparation, with its official launch planned for after November 2026.",
    "Estimativas verificáveis": "Verifiable estimates",
    "Separamos factos, hipóteses e estimativas. Os impactos financeiros são calculados com pressupostos explícitos e dados fornecidos pela empresa.": "We distinguish facts, hypotheses, and estimates. Financial impacts are calculated using explicit assumptions and data provided by the company.",
    "Confidencialidade por princípio": "Confidentiality by principle",
    "Informação empresarial não é divulgada nem transformada em caso de estudo sem autorização expressa.": "Business information is neither disclosed nor turned into a case study without explicit authorisation.",
    "Escopo e autorização definidos": "Defined scope and authorisation",
    "Entregáveis, prazo, responsabilidades, investimento e utilização de dados são acordados antes do início do trabalho.": "Deliverables, timeline, responsibilities, investment, and data use are agreed before work begins.",
    "Como começamos": "How we begin",
    "Pedido inicial": "Initial request",
    "Verificação de enquadramento": "Fit assessment",
    "Conversa confidencial": "Confidential conversation",
    "Proposta e decisão": "Proposal and decision",
    "Contacto e candidaturas": "Contact and applications",
    "Modo de demonstração — nenhum dado é enviado": "Demonstration mode — no data is sent",
    "Simular pedido de contacto": "Simulate contact request",
    "Os campos existem apenas para demonstrar a experiência. A informação introduzida não sai deste navegador nem é guardada pela NEXA360.": "The fields exist only to demonstrate the experience. Information entered does not leave this browser and is not stored by NEXA360.",
    "Informação preliminar": "Preliminary information",
    "Texto informativo sujeito a revisão jurídica antes da ativação comercial e da recolha de dados pessoais.": "Informational text subject to legal review before commercial activation and personal-data collection.",
    "Referências oficiais": "Official references",
    "Pedido preparado.": "Request prepared.",
    "Este formulário encontra-se em modo de demonstração e ainda não envia dados. A integração segura com o CRM privado será ativada na fase operacional.": "This form is in demonstration mode and does not yet send data. Secure integration with the private CRM will be activated during the operational phase.",
    "Custo da inércia": "Cost of inaction",
    "Quanto custa à sua empresa adiar decisões importantes?": "How much does postponing important decisions cost your company?",
    "Processos manuais, oportunidades sem acompanhamento, retrabalho e decisões sem indicadores consomem tempo, margem e capacidade de crescimento.": "Manual processes, unmonitored opportunities, rework, and decisions without indicators consume time, margin, and growth capacity.",
    "O impacto varia em cada empresa. Não presumimos um valor: ajudamos a medi-lo com dados e critérios claros.": "The impact varies from company to company. We do not assume a figure: we help measure it using data and clear criteria.",
    "Exemplo meramente ilustrativo": "Purely illustrative example",
    "Se cinco pessoas perderem duas horas por semana em tarefas repetidas ou retrabalho, considerando um custo médio estimado de 20 € por hora e 48 semanas de atividade:": "If five people lose two hours per week to repetitive tasks or rework, assuming an estimated average cost of €20 per hour and 48 working weeks:",
    "5 × 2 h × 20 € × 48 semanas = 9.600 € por ano": "5 × 2 h × €20 × 48 weeks = €9,600 per year",
    "Esta simulação não representa um resultado garantido nem presume a realidade da sua empresa. Os valores devem ser substituídos por dados reais da organização.": "This simulation is not a guaranteed result and does not assume your company’s circumstances. The figures should be replaced with the organisation’s actual data.",
    "Medir prioridades no Diagnóstico 360°": "Measure priorities with the 360° Diagnosis",
    "Tempo absorvido por tarefas repetitivas": "Time absorbed by repetitive tasks",
    "Oportunidades sem acompanhamento consistente": "Opportunities without consistent follow-up",
    "Retrabalho e erros evitáveis": "Rework and avoidable errors",
    "Decisões sem informação consolidada": "Decisions without consolidated information",
    "Estimativa responsável": "Responsible estimate",
    "Separamos factos, estimativas e hipóteses. Qualquer impacto financeiro é calculado apenas com informação fornecida pela empresa e nunca apresentado como perda comprovada sem evidência.": "We distinguish facts, estimates, and hypotheses. Any financial impact is calculated only from information provided by the company and is never presented as a proven loss without evidence.",
    "Fechar": "Close"
  },
  "es": {
    "Início": "Inicio",
    "Quem Somos": "Quiénes somos",
    "Soluções": "Soluciones",
    "Método": "Método",
    "Transformações": "Transformaciones",
    "Conhecimento": "Conocimiento",
    "FAQs": "Preguntas frecuentes",
    "Perguntas frequentes": "Preguntas frecuentes",
    "Clareza antes de começarmos.": "Claridad antes de empezar.",
    "Respostas diretas sobre a NEXA360, o Diagnóstico 360° e a forma como uma colaboração é preparada.": "Respuestas directas sobre NEXA360, el Diagnóstico 360° y cómo se prepara una colaboración.",
    "O que é a NEXA360?": "¿Qué es NEXA360?",
    "A NEXA360 é um projeto de consultoria empresarial orientado para diagnóstico, estratégia, processos, CRM, inteligência artificial, crescimento e internacionalização, com atenção à sustentabilidade e ao valor humano.": "NEXA360 es un proyecto de consultoría empresarial centrado en diagnóstico, estrategia, procesos, CRM, inteligencia artificial, crecimiento e internacionalización, con atención a la sostenibilidad y al valor humano.",
    "A NEXA360 já iniciou oficialmente a atividade?": "¿NEXA360 ya ha iniciado oficialmente su actividad?",
    "Ainda não. O projeto encontra-se em desenvolvimento e a abertura oficial está prevista para depois de novembro de 2026. Nesta fase, o website é institucional e demonstrativo.": "Todavía no. El proyecto está en desarrollo y la apertura oficial está prevista para después de noviembre de 2026. En esta fase, el sitio es institucional y demostrativo.",
    "O que inclui o Diagnóstico 360°?": "¿Qué incluye el Diagnóstico 360°?",
    "Inclui recolha estruturada de informação, análise das áreas críticas, identificação de riscos e oportunidades, definição de prioridades e um plano de ação com responsáveis, prazos e indicadores. O âmbito final é confirmado por proposta escrita.": "Incluye recogida estructurada de información, análisis de áreas críticas, identificación de riesgos y oportunidades, prioridades y un plan de acción con responsables, plazos e indicadores. El alcance final se confirma por escrito.",
    "Quanto custa e quanto tempo demora?": "¿Cuánto cuesta y cuánto tarda?",
    "A edição fundadora apresentada no site prevê uma condição de 650 € acrescida de IVA e entrega em 15 dias úteis, nos termos da proposta aplicável. Outros serviços, calendários e investimentos dependem do âmbito acordado com cada organização.": "La edición fundadora presentada en el sitio prevé 650 € más IVA y entrega en 15 días hábiles, conforme a la propuesta aplicable. Los demás servicios, plazos e inversiones dependen del alcance acordado.",
    "Como são definidos pagamento, alterações e cancelamento?": "¿Cómo se definen el pago, los cambios y la cancelación?",
    "Essas condições são apresentadas antes do início do trabalho, numa proposta ou contrato escrito. Nenhum serviço é iniciado sem aceitação expressa do âmbito, entregáveis, calendário, investimento, forma de pagamento e regras de alteração ou cancelamento.": "Estas condiciones se presentan antes de iniciar el trabajo en una propuesta o contrato escrito. Ningún servicio comienza sin aceptación expresa del alcance, entregables, calendario, inversión, forma de pago y reglas de cambio o cancelación.",
    "A NEXA360 garante resultados comerciais?": "¿NEXA360 garantiza resultados comerciales?",
    "Não. A NEXA360 compromete-se com método, análise e entregáveis acordados, mas resultados dependem também das decisões, recursos, execução e contexto de cada organização.": "No. NEXA360 se compromete con el método, el análisis y los entregables acordados, pero los resultados también dependen de las decisiones, recursos, ejecución y contexto de cada organización.",
    "A NEXA360 pode apoiar projetos internacionais?": "¿Puede NEXA360 apoyar proyectos internacionales?",
    "Sim, mediante análise prévia do mercado e do enquadramento aplicável. Projetos na União Europeia, no Espaço Económico Europeu ou em países da CPLP exigem proposta própria, com país de destino, moeda, impostos, responsabilidades, regras de dados e parceiros locais definidos quando necessário.": "Sí, previa evaluación del mercado y del marco aplicable. Los proyectos en la Unión Europea, el Espacio Económico Europeo o países de la CPLP requieren una propuesta propia que defina país de destino, moneda, impuestos, responsabilidades, reglas de datos y socios locales cuando sean necesarios.",
    "Os dados introduzidos no formulário são guardados?": "¿Se guardan los datos introducidos en el formulario?",
    "Não na versão atual. O formulário é uma demonstração: a informação não sai do navegador nem é guardada pela NEXA360. A política será atualizada antes de qualquer recolha real.": "No en la versión actual. El formulario es una demostración: la información no sale del navegador ni es almacenada por NEXA360. La política se actualizará antes de cualquier recogida real.",
    "Como posso manifestar interesse ou esclarecer outra questão?": "¿Cómo puedo manifestar interés o plantear otra pregunta?",
    "Utilize a área de contacto demonstrativa para conhecer a experiência prevista. O canal operacional e os dados comerciais completos serão publicados antes da abertura oficial.": "Utilice el área de contacto demostrativa para conocer la experiencia prevista. El canal operativo y los datos comerciales completos se publicarán antes de la apertura oficial.",
    "Contacto": "Contacto",
    "Iniciar uma conversa": "Iniciar una conversación",
    "Estratégia · Tecnologia · Pessoas": "Estrategia · Tecnología · Personas",
    "O potencial da sua empresa merece mais do que soluções.": "El potencial de su empresa merece más que soluciones.",
    "Merece transformação.": "Merece transformación.",
    "Na NEXA360 transformamos desafios em oportunidades, estratégia em crescimento e potencial em resultados duradouros.": "En NEXA360 transformamos desafíos en oportunidades, estrategia en crecimiento y potencial en resultados duraderos.",
    "Descobrir a NEXA360": "Descubrir NEXA360",
    "Mais do que consultoria. Uma parceria de evolução.": "Más que consultoría. Una alianza para evolucionar.",
    "Visão integrada": "Visión integrada",
    "Soluções à medida": "Soluciones a medida",
    "+ impacto": "+ impacto",
    "Valor humano": "Valor humano",
    "sempre": "siempre",
    "DIAGNÓSTICO": "DIAGNÓSTICO",
    "ESTRATÉGIA": "ESTRATEGIA",
    "INOVAÇÃO": "INNOVACIÓN",
    "CRESCIMENTO": "CRECIMIENTO",
    "Quem somos": "Quiénes somos",
    "Empresas fortes nascem de decisões inteligentes — e de pessoas valorizadas.": "Las empresas sólidas nacen de decisiones inteligentes — y de personas valoradas.",
    "A NEXA360 é um ecossistema de soluções estratégicas criado para ajudar empresas e pessoas a superar desafios, crescer de forma sustentável e transformar potencial em resultados.": "NEXA360 es un ecosistema de soluciones estratégicas creado para ayudar a empresas y personas a superar desafíos, crecer de forma sostenible y transformar el potencial en resultados.",
    "Mais do que consultoria, a NEXA360 foi concebida para ser uma parceira de evolução. A proposta não se limita a recomendações: integra estratégias, ferramentas, processos e oportunidades para acompanhar a evolução de cada organização.": "Más que consultoría, NEXA360 fue concebida como una socia de evolución. Su propuesta va más allá de las recomendaciones: integra estrategias, herramientas, procesos y oportunidades para acompañar la evolución de cada organización.",
    "Acreditamos que empresas extraordinárias são construídas por pessoas valorizadas. Por isso, cuidamos das empresas sem nunca deixar de cuidar das pessoas.": "Creemos que las empresas extraordinarias están construidas por personas valoradas. Por eso, cuidamos de las empresas sin dejar nunca de cuidar de las personas.",
    "NEXA360 · FILOSOFIA": "NEXA360 · FILOSOFÍA",
    "Ética": "Ética",
    "Proximidade": "Cercanía",
    "Inovação": "Innovación",
    "Resultados": "Resultados",
    "Princípios NEXA360": "Principios NEXA360",
    "Valores que orientam cada decisão": "Valores que guían cada decisión",
    "Selecione um valor para conhecer o compromisso que o transforma em prática.": "Seleccione un valor para conocer el compromiso que lo convierte en práctica.",
    "Atuamos com transparência, confidencialidade e responsabilidade, sem promessas que não possam ser sustentadas por evidências.": "Actuamos con transparencia, confidencialidad y responsabilidad, sin promesas que no puedan sustentarse con evidencias.",
    "Escutamos antes de propor. Cada solução é construída com a empresa, respeitando a sua realidade, os seus recursos e as suas pessoas.": "Escuchamos antes de proponer. Cada solución se construye con la empresa, respetando su realidad, sus recursos y sus personas.",
    "Aplicamos tecnologia e inteligência artificial quando acrescentam valor real, com segurança, propósito e supervisão humana.": "Aplicamos tecnología e inteligencia artificial cuando aportan valor real, con seguridad, propósito y supervisión humana.",
    "Transformamos análises em prioridades, planos de ação e indicadores que permitam acompanhar a evolução da empresa.": "Transformamos los análisis en prioridades, planes de acción e indicadores que permiten seguir la evolución de la empresa.",
    "Colocamos as pessoas no centro da transformação, valorizando conhecimento, participação, bem-estar e desenvolvimento.": "Situamos a las personas en el centro de la transformación, valorando el conocimiento, la participación, el bienestar y el desarrollo.",
    "Uma visão 360° para desafios que não cabem em caixas.": "Una visión 360° para desafíos que no caben en compartimentos.",
    "Integramos estratégia, tecnologia, internacionalização, marca e desenvolvimento humano para criar respostas coerentes, aplicáveis e mensuráveis.": "Integramos estrategia, tecnología, internacionalización, marca y desarrollo humano para crear respuestas coherentes, aplicables y medibles.",
    "Diagnóstico Empresarial 360°": "Diagnóstico Empresarial 360°",
    "Clareza sobre riscos, oportunidades, prioridades e próximos passos.": "Claridad sobre riesgos, oportunidades, prioridades y próximos pasos.",
    "Estratégia e Crescimento": "Estrategia y Crecimiento",
    "Planeamento, posicionamento e execução para evoluir com consistência.": "Planificación, posicionamiento y ejecución para evolucionar con coherencia.",
    "CRM e Processos": "CRM y Procesos",
    "Relações mais inteligentes, operações organizadas e decisões apoiadas por dados.": "Relaciones más inteligentes, operaciones organizadas y decisiones respaldadas por datos.",
    "IA e Transformação Digital": "IA y Transformación Digital",
    "Tecnologia aplicada com propósito, segurança e impacto real.": "Tecnología aplicada con propósito, seguridad e impacto real.",
    "Marketing e Marca": "Marketing y Marca",
    "Identidade, comunicação e presença capazes de gerar confiança.": "Identidad, comunicación y presencia capaces de generar confianza.",
    "Comércio Internacional": "Comercio Internacional",
    "Mercados, parceiros e estratégias para crescer além-fronteiras.": "Mercados, socios y estrategias para crecer más allá de las fronteras.",
    "Método NEXA360": "Método NEXA360",
    "Da compreensão à transformação.": "De la comprensión a la transformación.",
    "Um percurso claro, personalizado e acompanhado — sem soluções genéricas.": "Un recorrido claro, personalizado y acompañado — sin soluciones genéricas.",
    "Diagnosticar": "Diagnosticar",
    "Compreendemos a realidade, ouvimos as pessoas e identificamos as causas, não apenas os sintomas.": "Comprendemos la realidad, escuchamos a las personas e identificamos las causas, no solo los síntomas.",
    "Desenhar": "Diseñar",
    "Criamos uma estratégia integrada, realista e alinhada com os recursos e objetivos da organização.": "Creamos una estrategia integrada, realista y alineada con los recursos y objetivos de la organización.",
    "Implementar": "Implementar",
    "Transformamos o plano em ação, com ferramentas, processos, tecnologia e acompanhamento próximo.": "Transformamos el plan en acción, con herramientas, procesos, tecnología y acompañamiento cercano.",
    "Evoluir": "Evolucionar",
    "Medimos resultados, aprendemos com os dados e ajustamos continuamente o caminho.": "Medimos resultados, aprendemos de los datos y ajustamos continuamente el camino.",
    "Casos de Transformação": "Casos de Transformación",
    "O valor de uma estratégia mede-se pela mudança que consegue criar.": "El valor de una estrategia se mide por el cambio que logra crear.",
    "Produto próprio": "Producto propio",
    "Tecnologia & Relações": "Tecnología y Relaciones",
    "Ecossistema inteligente para gerir relações, oportunidades, decisões e crescimento.": "Ecosistema inteligente para gestionar relaciones, oportunidades, decisiones y crecimiento.",
    "Projeto estratégico": "Proyecto estratégico",
    "Internacionalização de PME": "Internacionalización de pymes",
    "Modelo integrado de seleção de mercados, entrada internacional, riscos, finanças e KPIs.": "Modelo integrado de selección de mercados, entrada internacional, riesgos, finanzas e indicadores clave.",
    "Metodologia própria": "Metodología propia",
    "Estratégia": "Estrategia",
    "Leitura multidimensional da empresa para transformar complexidade em prioridades claras.": "Lectura multidimensional de la empresa para transformar la complejidad en prioridades claras.",
    "* Os casos iniciais podem incluir projetos próprios, estratégicos, conceptuais ou académicos, sempre identificados com transparência.": "* Los casos iniciales pueden incluir proyectos propios, estratégicos, conceptuales o académicos, siempre identificados con transparencia.",
    "Centro de Conhecimento": "Centro de Conocimiento",
    "Conhecimento que não fica no papel. Torna-se decisão.": "Conocimiento que no se queda en el papel. Se convierte en decisión.",
    "Por que crescer sem direção pode fragilizar uma empresa": "Por qué crecer sin dirección puede debilitar una empresa",
    "Inteligência Artificial": "Inteligencia Artificial",
    "Como aplicar IA sem perder o valor humano": "Cómo aplicar IA sin perder el valor humano",
    "Internacionalização": "Internacionalización",
    "O que uma PME deve validar antes de entrar num novo mercado": "Qué debe validar una pyme antes de entrar en un nuevo mercado",
    "Parcerias": "Alianzas",
    "As melhores transformações raramente acontecem a sós.": "Las mejores transformaciones rara vez suceden en solitario.",
    "Procuramos construir relações com empresas, especialistas, instituições, associações e investidores que partilham a nossa visão de crescimento responsável, inovação e valor humano.": "Buscamos construir relaciones con empresas, especialistas, instituciones, asociaciones e inversores que comparten nuestra visión de crecimiento responsable, innovación y valor humano.",
    "Explorar uma parceria": "Explorar una alianza",
    "Vamos conversar": "Hablemos",
    "Toda grande transformação começa com uma conversa.": "Toda gran transformación comienza con una conversación.",
    "Conte-nos o desafio, a ambição ou a ideia. A primeira reunião será um espaço de escuta, clareza e descoberta de possibilidades.": "Cuéntenos el desafío, la ambición o la idea. La primera reunión será un espacio de escucha, claridad y descubrimiento de posibilidades.",
    "Escuta atenta · Confidencialidade · Próximos passos claros": "Escucha atenta · Confidencialidad · Próximos pasos claros",
    "Nome": "Nombre",
    "Empresa": "Empresa",
    "E-mail": "Correo electrónico",
    "Qual é o principal desafio?": "¿Cuál es el principal desafío?",
    "Selecione uma opção": "Seleccione una opción",
    "Estratégia e crescimento": "Estrategia y crecimiento",
    "CRM e processos": "CRM y procesos",
    "Marketing e marca": "Marketing y marca",
    "Comércio internacional": "Comercio internacional",
    "Parceria institucional": "Alianza institucional",
    "Outro desafio": "Otro desafío",
    "Mensagem": "Mensaje",
    "Enviar pedido de contacto": "Enviar solicitud de contacto",
    "Ao enviar, concorda com o tratamento dos dados exclusivamente para responder ao seu pedido.": "Al enviar, acepta el tratamiento de sus datos exclusivamente para responder a su solicitud.",
    "Estratégia que transforma. Tecnologia com propósito. Crescimento com valor humano.": "Estrategia que transforma. Tecnología con propósito. Crecimiento con valor humano.",
    "© 2026 NEXA360. Todos os direitos reservados.": "© 2026 NEXA360. Todos los derechos reservados.",
    "Privacidade": "Privacidad",
    "Termos": "Términos",
    "Internacional": "Internacional",
    "Mensagem recebida.": "Mensaje recibido.",
    "Obrigada pelo contacto. Este formulário está preparado para futura integração com o CRM NEXA360.": "Gracias por ponerse en contacto. Este formulario está preparado para su futura integración con el CRM NEXA360.",
    "Ajudamos micro, pequenas e médias empresas a diagnosticar problemas, organizar processos e transformar decisões em crescimento sustentável — combinando estratégia, tecnologia e valor humano.": "Ayudamos a micro, pequeñas y medianas empresas a diagnosticar problemas, organizar procesos y transformar decisiones en crecimiento sostenible, combinando estrategia, tecnología y valor humano.",
    "Conhecer o Diagnóstico 360°": "Conocer el Diagnóstico 360°",
    "Conhecer o Programa Empresas Fundadoras": "Conocer el Programa Empresas Fundadoras",
    "Explorar o Diagnóstico 360°": "Explorar el Diagnóstico 360°",
    "Candidatar a minha empresa": "Presentar mi empresa",
    "Manifestar interesse": "Manifestar interés",
    "Manifestar interesse na edição fundadora": "Manifestar interés en la edición fundadora",
    "A NEXA360 é um projeto empresarial em fase de preparação, desenvolvido sob a responsabilidade de Mônica Cardoso. A abertura oficial da atividade está prevista para depois de novembro de 2026.": "NEXA360 es un proyecto empresarial en fase de preparación, desarrollado bajo la responsabilidad de Mônica Cardoso. El inicio oficial de la actividad está previsto para después de noviembre de 2026.",
    "Informação de planeamento: a abertura oficial da atividade e das candidaturas está prevista para depois de novembro de 2026. Até essa data, o programa encontra-se em preparação e recebe apenas manifestações de interesse.": "Información de planificación: el inicio oficial de la actividad y de las solicitudes está previsto para después de noviembre de 2026. Hasta entonces, el programa se encuentra en preparación y solo recibe manifestaciones de interés.",
    "Contacto e manifestações de interesse": "Contacto y manifestaciones de interés",
    "© 2026 NEXA360 — Projeto empresarial em desenvolvimento. Responsável pelo projeto: Mônica Cardoso.": "© 2026 NEXA360 — Proyecto empresarial en desarrollo. Responsable del proyecto: Mônica Cardoso.",
    "Estratégia de alto nível, pensada para a realidade das PME.": "Estrategia de alto nivel, pensada para la realidad de las pymes.",
    "Para quem foi pensada": "Para quién fue concebida",
    "A dimensão da empresa não limita a dimensão do seu potencial.": "El tamaño de la empresa no limita la dimensión de su potencial.",
    "O nosso foco são micro, pequenas e médias empresas que precisam de transformar informação dispersa, desafios operacionais ou ambição de crescimento em prioridades claras e decisões executáveis.": "Nuestro enfoque son las micro, pequeñas y medianas empresas que necesitan transformar información dispersa, desafíos operativos o ambición de crecimiento en prioridades claras y decisiones ejecutables.",
    "Falta de clareza sobre prioridades": "Falta de claridad sobre las prioridades",
    "Processos comerciais desorganizados": "Procesos comerciales desorganizados",
    "Crescimento sem indicadores consistentes": "Crecimiento sin indicadores consistentes",
    "Decisões de expansão por validar": "Decisiones de expansión por validar",
    "Áreas de atuação": "Áreas de actuación",
    "Começamos pela clareza. Evoluímos para a execução.": "Comenzamos por la claridad. Evolucionamos hacia la ejecución.",
    "O Diagnóstico Empresarial 360° é a nossa porta de entrada. A partir das prioridades identificadas, mobilizamos as competências certas em três áreas complementares.": "El Diagnóstico Empresarial 360° es nuestro punto de partida. A partir de las prioridades identificadas, movilizamos las competencias adecuadas en tres áreas complementarias.",
    "Serviço de entrada": "Servicio inicial",
    "Diagnóstico e Estratégia": "Diagnóstico y Estrategia",
    "Compreensão integrada da empresa, definição de prioridades e plano de ação mensurável.": "Comprensión integrada de la empresa, definición de prioridades y plan de acción medible.",
    "Processos, CRM e IA": "Procesos, CRM e IA",
    "Operações organizadas, relações comerciais acompanhadas e tecnologia aplicada com segurança e propósito.": "Operaciones organizadas, relaciones comerciales acompañadas y tecnología aplicada con seguridad y propósito.",
    "Crescimento e Internacionalização": "Crecimiento e Internacionalización",
    "Posicionamento, mercados, parceiros e decisões de expansão sustentadas por evidência.": "Posicionamiento, mercados, socios y decisiones de expansión respaldadas por evidencias.",
    "Serviço principal": "Servicio principal",
    "Uma análise estruturada para transformar complexidade em prioridades claras, decisões fundamentadas e um plano de ação adequado à realidade da empresa.": "Un análisis estructurado para transformar la complejidad en prioridades claras, decisiones fundamentadas y un plan de acción adaptado a la realidad de la empresa.",
    "dias úteis": "días laborables",
    "visão integrada": "visión integrada",
    "plano priorizado": "plan priorizado",
    "Conhecer a edição fundadora": "Conocer la edición fundadora",
    "O que a empresa recebe": "Lo que recibe la empresa",
    "Reunião de diagnóstico e recolha orientada de informação": "Reunión de diagnóstico y recopilación guiada de información",
    "Análise integrada de estratégia, operação, comercial, pessoas e tecnologia": "Análisis integrado de estrategia, operaciones, actividad comercial, personas y tecnología",
    "Mapa de riscos, oportunidades e prioridades": "Mapa de riesgos, oportunidades y prioridades",
    "Plano de ação de 90 dias com responsáveis e indicadores": "Plan de acción de 90 días con responsables e indicadores",
    "Reunião executiva de apresentação e próximos passos": "Reunión ejecutiva de presentación y próximos pasos",
    "Programa Empresas Fundadoras": "Programa Empresas Fundadoras",
    "Três PME. Um diagnóstico rigoroso. Uma condição de lançamento.": "Tres pymes. Un diagnóstico riguroso. Una condición de lanzamiento.",
    "Selecionaremos três micro ou PME com atividade em Portugal ou com um projeto concreto de entrada, investimento ou expansão no mercado português. A condição fundadora permite validar e aperfeiçoar o método com empresas reais, sem reduzir a profundidade ou a qualidade da entrega.": "Seleccionaremos tres microempresas o pymes con actividad en Portugal o con un proyecto concreto de entrada, inversión o expansión en el mercado portugués. La condición fundadora permite validar y perfeccionar el método con empresas reales, sin reducir la profundidad ni la calidad de la entrega.",
    "Confidencialidade obrigatória. Qualquer testemunho ou caso de estudo será opcional e publicado apenas com autorização expressa.": "La confidencialidad es obligatoria. Cualquier testimonio o caso de estudio será opcional y se publicará únicamente con autorización expresa.",
    "3 vagas · sujeitas a seleção": "3 plazas · sujetas a selección",
    "Condição especial da edição fundadora": "Condición especial de la edición fundadora",
    "Valor previsto para edições posteriores: 950 € + IVA": "Valor previsto para ediciones posteriores: 950 € + IVA",
    "650 €": "650 €",
    "+ IVA": "+ IVA",
    "Micro ou PME com atividade, investimento ou projeto de expansão ligado a Portugal": "Microempresa o pyme con actividad, inversión o proyecto de expansión vinculado a Portugal",
    "Conclusão em 15 dias úteis": "Finalización en 15 días laborables",
    "Entrega integral do Diagnóstico 360°": "Entrega completa del Diagnóstico 360°",
    "Candidatura sem compromisso": "Solicitud sin compromiso",
    "Depois das três vagas:": "Después de las tres plazas:",
    "as empresas interessadas poderão integrar a lista de espera ou manifestar interesse numa edição posterior, sem qualquer compromisso.": "las empresas interesadas podrán incorporarse a la lista de espera o manifestar interés en una edición posterior, sin compromiso.",
    "Projetos e soluções": "Proyectos y soluciones",
    "Construímos evidência com transparência — sem apresentar conceitos como resultados de clientes.": "Construimos evidencias con transparencia, sin presentar conceptos como resultados de clientes.",
    "Demonstração tecnológica": "Demostración tecnológica",
    "Protótipo funcional público, com dados fictícios, para demonstrar gestão comercial multilingue. A versão privada segura será uma fase posterior de desenvolvimento.": "Prototipo funcional público, con datos ficticios, para demostrar la gestión comercial multilingüe. La versión privada segura será una fase posterior de desarrollo.",
    "* Nesta fase, apresentamos projetos próprios, metodologias e demonstrações identificados pela sua natureza. Os primeiros resultados de clientes serão publicados apenas com autorização.": "* En esta fase presentamos proyectos propios, metodologías y demostraciones identificados por su naturaleza. Los primeros resultados de clientes se publicarán únicamente con autorización.",
    "Ambiente público com dados exclusivamente fictícios.": "Entorno público con datos exclusivamente ficticios.",
    "Explorar demonstração": "Explorar la demostración",
    "Conversar sobre internacionalização": "Hablar sobre internacionalización",
    "Ver Diagnóstico 360°": "Ver el Diagnóstico 360°",
    "Como trabalhamos com transparência": "Cómo trabajamos con transparencia",
    "Rigor significa tornar claros o contexto, os critérios e os limites.": "El rigor significa aclarar el contexto, los criterios y los límites.",
    "Reunimos aqui os princípios que orientam as estimativas, a informação empresarial e qualquer futura relação comercial.": "Aquí reunimos los principios que orientan las estimaciones, la información empresarial y cualquier futura relación comercial.",
    "Enquadramento claro": "Contexto claro",
    "A NEXA360 é um projeto empresarial em preparação, com abertura oficial prevista para depois de novembro de 2026.": "NEXA360 es un proyecto empresarial en preparación, con apertura oficial prevista para después de noviembre de 2026.",
    "Estimativas verificáveis": "Estimaciones verificables",
    "Separamos factos, hipóteses e estimativas. Os impactos financeiros são calculados com pressupostos explícitos e dados fornecidos pela empresa.": "Separamos hechos, hipótesis y estimaciones. Los impactos financieros se calculan con supuestos explícitos y datos facilitados por la empresa.",
    "Confidencialidade por princípio": "Confidencialidad por principio",
    "Informação empresarial não é divulgada nem transformada em caso de estudo sem autorização expressa.": "La información empresarial no se divulga ni se convierte en caso de estudio sin autorización expresa.",
    "Escopo e autorização definidos": "Alcance y autorización definidos",
    "Entregáveis, prazo, responsabilidades, investimento e utilização de dados são acordados antes do início do trabalho.": "Los entregables, el plazo, las responsabilidades, la inversión y el uso de los datos se acuerdan antes del inicio del trabajo.",
    "Como começamos": "Cómo comenzamos",
    "Pedido inicial": "Solicitud inicial",
    "Verificação de enquadramento": "Evaluación de adecuación",
    "Conversa confidencial": "Conversación confidencial",
    "Proposta e decisão": "Propuesta y decisión",
    "Contacto e candidaturas": "Contacto y solicitudes",
    "Modo de demonstração — nenhum dado é enviado": "Modo de demostración — no se envía ningún dato",
    "Simular pedido de contacto": "Simular solicitud de contacto",
    "Os campos existem apenas para demonstrar a experiência. A informação introduzida não sai deste navegador nem é guardada pela NEXA360.": "Los campos existen únicamente para demostrar la experiencia. La información introducida no sale de este navegador ni es almacenada por NEXA360.",
    "Informação preliminar": "Información preliminar",
    "Texto informativo sujeito a revisão jurídica antes da ativação comercial e da recolha de dados pessoais.": "Texto informativo sujeto a revisión jurídica antes de la activación comercial y la recogida de datos personales.",
    "Referências oficiais": "Referencias oficiales",
    "Pedido preparado.": "Solicitud preparada.",
    "Este formulário encontra-se em modo de demonstração e ainda não envia dados. A integração segura com o CRM privado será ativada na fase operacional.": "Este formulario está en modo de demostración y todavía no envía datos. La integración segura con el CRM privado se activará en la fase operativa.",
    "Custo da inércia": "Coste de la inacción",
    "Quanto custa à sua empresa adiar decisões importantes?": "¿Cuánto le cuesta a su empresa posponer decisiones importantes?",
    "Processos manuais, oportunidades sem acompanhamento, retrabalho e decisões sem indicadores consomem tempo, margem e capacidade de crescimento.": "Los procesos manuales, las oportunidades sin seguimiento, el retrabajo y las decisiones sin indicadores consumen tiempo, margen y capacidad de crecimiento.",
    "O impacto varia em cada empresa. Não presumimos um valor: ajudamos a medi-lo com dados e critérios claros.": "El impacto varía en cada empresa. No presuponemos una cifra: ayudamos a medirlo con datos y criterios claros.",
    "Exemplo meramente ilustrativo": "Ejemplo meramente ilustrativo",
    "Se cinco pessoas perderem duas horas por semana em tarefas repetidas ou retrabalho, considerando um custo médio estimado de 20 € por hora e 48 semanas de atividade:": "Si cinco personas pierden dos horas por semana en tareas repetitivas o retrabajo, considerando un coste medio estimado de 20 € por hora y 48 semanas de actividad:",
    "5 × 2 h × 20 € × 48 semanas = 9.600 € por ano": "5 × 2 h × 20 € × 48 semanas = 9.600 € al año",
    "Esta simulação não representa um resultado garantido nem presume a realidade da sua empresa. Os valores devem ser substituídos por dados reais da organização.": "Esta simulación no representa un resultado garantizado ni presupone la realidad de su empresa. Los valores deben sustituirse por datos reales de la organización.",
    "Medir prioridades no Diagnóstico 360°": "Medir prioridades con el Diagnóstico 360°",
    "Tempo absorvido por tarefas repetitivas": "Tiempo absorbido por tareas repetitivas",
    "Oportunidades sem acompanhamento consistente": "Oportunidades sin seguimiento consistente",
    "Retrabalho e erros evitáveis": "Retrabajo y errores evitables",
    "Decisões sem informação consolidada": "Decisiones sin información consolidada",
    "Estimativa responsável": "Estimación responsable",
    "Separamos factos, estimativas e hipóteses. Qualquer impacto financeiro é calculado apenas com informação fornecida pela empresa e nunca apresentado como perda comprovada sem evidência.": "Separamos hechos, estimaciones e hipótesis. Cualquier impacto financiero se calcula únicamente con información facilitada por la empresa y nunca se presenta como una pérdida demostrada sin evidencias.",
    "Fechar": "Cerrar"
  }
};
const attributeTranslations = {
  "en": {
    "NEXA360 — início": "NEXA360 — home",
    "Navegação principal": "Main navigation",
    "Idioma": "Language",
    "Abrir menu": "Open menu",
    "Fechar menu": "Close menu",
    "Símbolo NEXA360": "NEXA360 symbol",
    "Saber mais": "Learn more",
    "Voltar ao topo": "Back to top",
    "Ir para o Método NEXA360": "Go to the NEXA360 Method",
    "Ir para as Soluções": "Go to Solutions",
    "Ir para Quem Somos e a filosofia NEXA360": "Go to About Us and the NEXA360 philosophy",
    "Conhecer o Diagnóstico 360°": "Explore the 360° Diagnosis"
    ,"Fechar informação legal": "Close legal information"
    ,"Valores NEXA360": "NEXA360 values"
    ,"Exemplo ilustrativo do custo da inércia": "Illustrative example of the cost of inaction"
  },
  "es": {
    "NEXA360 — início": "NEXA360 — inicio",
    "Navegação principal": "Navegación principal",
    "Idioma": "Idioma",
    "Abrir menu": "Abrir menú",
    "Fechar menu": "Cerrar menú",
    "Símbolo NEXA360": "Símbolo NEXA360",
    "Saber mais": "Saber más",
    "Voltar ao topo": "Volver arriba",
    "Ir para o Método NEXA360": "Ir al Método NEXA360",
    "Ir para as Soluções": "Ir a Soluciones",
    "Ir para Quem Somos e a filosofia NEXA360": "Ir a Quiénes somos y a la filosofía NEXA360",
    "Conhecer o Diagnóstico 360°": "Conocer el Diagnóstico 360°"
    ,"Fechar informação legal": "Cerrar información legal"
    ,"Valores NEXA360": "Valores NEXA360"
    ,"Exemplo ilustrativo do custo da inércia": "Ejemplo ilustrativo del coste de la inacción"
  }
};
const pageMeta = {
  "pt": {
    "lang": "pt-PT",
    "title": "NEXA360 — Evolução com Valor Humano",
    "description": "Estratégia de alto nível para PME: Diagnóstico Empresarial 360°, processos, CRM, IA, crescimento e internacionalização.",
    "ogTitle": "NEXA360 — O potencial da sua empresa merece transformação",
    "ogDescription": "Diagnóstico, prioridades claras e execução para transformar decisões de PME em crescimento sustentável."
  },
  "en": {
    "lang": "en",
    "title": "NEXA360 — Evolution with Human Value",
    "description": "High-level strategy for SMEs: 360° Business Diagnosis, processes, CRM, AI, growth, and internationalisation.",
    "ogTitle": "NEXA360 — Your company’s potential deserves transformation",
    "ogDescription": "Diagnosis, clear priorities, and execution to turn SME decisions into sustainable growth."
  },
  "es": {
    "lang": "es",
    "title": "NEXA360 — Evolución con Valor Humano",
    "description": "Estrategia de alto nivel para pymes: Diagnóstico Empresarial 360°, procesos, CRM, IA, crecimiento e internacionalización.",
    "ogTitle": "NEXA360 — El potencial de su empresa merece transformación",
    "ogDescription": "Diagnóstico, prioridades claras y ejecución para transformar decisiones de pymes en crecimiento sostenible."
  }
};

const articleContent = {
  "growth": {
    "pt": {
      "category": "Estratégia",
      "title": "Por que crescer sem direção pode fragilizar uma empresa",
      "preview": "Crescimento saudável exige prioridades, capacidade operacional e decisões coerentes.",
      "time": "5 min",
      "body": [
        "Crescer é desejável, mas o aumento das vendas, dos clientes ou da equipa não garante, por si só, uma empresa mais forte. Quando a expansão avança sem prioridades claras, os processos ficam sobrecarregados, a qualidade oscila e as pessoas passam a trabalhar em permanente reação.",
        "Antes de acelerar, a organização precisa compreender quais capacidades sustentam o próximo nível: liderança, fluxo de caixa, processos, tecnologia, competências e experiência do cliente. A estratégia transforma ambição em escolhas — incluindo aquilo que não deve ser feito agora.",
        "Na NEXA360, vemos o crescimento como uma evolução integrada. O objetivo não é apenas aumentar; é desenvolver uma empresa capaz de sustentar resultados sem perder clareza, identidade ou valor humano."
      ],
      "takeaway": "Crescimento sem direção aumenta a complexidade. Crescimento com estratégia aumenta a capacidade."
    },
    "en": {
      "category": "Strategy",
      "title": "Why growth without direction can weaken a company",
      "preview": "Healthy growth requires priorities, operational capacity, and coherent decisions.",
      "time": "5 min",
      "body": [
        "Growth is desirable, but increasing sales, customers, or headcount does not automatically make a company stronger. When expansion moves ahead without clear priorities, processes become overloaded, quality fluctuates, and people work in constant reaction mode.",
        "Before accelerating, an organisation must understand which capabilities will support the next stage: leadership, cash flow, processes, technology, skills, and customer experience. Strategy turns ambition into choices — including what should not be done yet.",
        "At NEXA360, we see growth as integrated evolution. The goal is not merely to become larger, but to build a company capable of sustaining results without losing clarity, identity, or human value."
      ],
      "takeaway": "Growth without direction increases complexity. Growth with strategy increases capability."
    },
    "es": {
      "category": "Estrategia",
      "title": "Por qué crecer sin dirección puede debilitar una empresa",
      "preview": "El crecimiento saludable exige prioridades, capacidad operativa y decisiones coherentes.",
      "time": "5 min",
      "body": [
        "Crecer es deseable, pero aumentar las ventas, los clientes o el equipo no garantiza por sí solo una empresa más fuerte. Cuando la expansión avanza sin prioridades claras, los procesos se sobrecargan, la calidad fluctúa y las personas trabajan en permanente reacción.",
        "Antes de acelerar, la organización debe comprender qué capacidades sostendrán la siguiente etapa: liderazgo, flujo de caja, procesos, tecnología, competencias y experiencia del cliente. La estrategia transforma la ambición en decisiones, incluido aquello que todavía no debe hacerse.",
        "En NEXA360 entendemos el crecimiento como una evolución integrada. El objetivo no es solo aumentar, sino desarrollar una empresa capaz de sostener resultados sin perder claridad, identidad ni valor humano."
      ],
      "takeaway": "El crecimiento sin dirección aumenta la complejidad. El crecimiento con estrategia aumenta la capacidad."
    }
  },
  "human-ai": {
    "pt": {
      "category": "Inteligência Artificial",
      "title": "Como aplicar IA sem perder o valor humano",
      "preview": "A tecnologia cria mais valor quando amplia a capacidade das pessoas em vez de as afastar.",
      "time": "7 min",
      "body": [
        "A Inteligência Artificial pode reduzir tarefas repetitivas, revelar padrões e apoiar decisões. O risco surge quando é adotada apenas para substituir interação, sem compreender o impacto nos clientes, nas equipas e na cultura da organização.",
        "Uma implementação responsável começa pelo problema real. Depois, define-se onde a automação melhora a experiência, onde a decisão humana continua indispensável e quais dados podem ser utilizados com segurança, transparência e respeito.",
        "A melhor IA não torna a empresa menos humana. Liberta tempo para escutar, criar, decidir e construir relações. Tecnologia com propósito aumenta a capacidade das pessoas — não o seu afastamento."
      ],
      "takeaway": "Automatize tarefas. Preserve decisões humanas. Amplifique relações."
    },
    "en": {
      "category": "Artificial Intelligence",
      "title": "How to apply AI without losing human value",
      "preview": "Technology creates more value when it expands people’s capabilities instead of distancing them.",
      "time": "7 min",
      "body": [
        "Artificial Intelligence can reduce repetitive work, reveal patterns, and support decisions. The risk appears when it is adopted merely to replace interaction, without understanding the impact on customers, teams, and organisational culture.",
        "Responsible implementation begins with the real problem. It then defines where automation improves the experience, where human judgement remains essential, and which data can be used safely, transparently, and respectfully.",
        "The best AI does not make a company less human. It frees time to listen, create, decide, and build relationships. Technology with purpose expands people’s capabilities — it does not distance them."
      ],
      "takeaway": "Automate tasks. Preserve human judgement. Amplify relationships."
    },
    "es": {
      "category": "Inteligencia Artificial",
      "title": "Cómo aplicar IA sin perder el valor humano",
      "preview": "La tecnología crea más valor cuando amplía la capacidad de las personas en lugar de alejarlas.",
      "time": "7 min",
      "body": [
        "La Inteligencia Artificial puede reducir tareas repetitivas, revelar patrones y apoyar decisiones. El riesgo aparece cuando se adopta únicamente para sustituir la interacción, sin comprender el impacto en los clientes, los equipos y la cultura de la organización.",
        "Una implementación responsable comienza por el problema real. Después se define dónde la automatización mejora la experiencia, dónde el criterio humano sigue siendo indispensable y qué datos pueden utilizarse con seguridad, transparencia y respeto.",
        "La mejor IA no hace que la empresa sea menos humana. Libera tiempo para escuchar, crear, decidir y construir relaciones. La tecnología con propósito amplía la capacidad de las personas, no su distanciamiento."
      ],
      "takeaway": "Automatice tareas. Preserve el criterio humano. Amplifique las relaciones."
    }
  },
  "international": {
    "pt": {
      "category": "Internacionalização",
      "title": "O que uma PME deve validar antes de entrar num novo mercado",
      "preview": "Antes da expansão, é essencial validar procura, adaptação, riscos e capacidade de execução.",
      "time": "8 min",
      "body": [
        "Um mercado atrativo em dimensão pode não ser o mercado certo para uma PME. A decisão deve combinar procura real, concorrência, requisitos legais, custos logísticos, comportamento cultural e adequação da proposta de valor.",
        "Também é necessário olhar para dentro: a empresa possui capacidade produtiva, equipa, financiamento, parceiros e processos para cumprir aquilo que promete? A internacionalização expõe rapidamente fragilidades que, no mercado doméstico, podiam permanecer escondidas.",
        "Validar antes de investir reduz risco e melhora a escolha do modo de entrada. Uma expansão sustentável começa com evidência, prioridades e um plano que liga mercado, operação, pessoas e finanças."
      ],
      "takeaway": "Não escolha apenas um mercado promissor. Escolha um mercado que a empresa esteja preparada para servir."
    },
    "en": {
      "category": "Internationalisation",
      "title": "What an SME should validate before entering a new market",
      "preview": "Before expanding, it is essential to validate demand, adaptation, risks, and execution capacity.",
      "time": "8 min",
      "body": [
        "A market that is attractive in size may not be the right market for an SME. The decision should combine real demand, competition, legal requirements, logistics costs, cultural behaviour, and fit with the value proposition.",
        "The company must also look inward: does it have the production capacity, team, financing, partners, and processes to deliver what it promises? Internationalisation quickly exposes weaknesses that may remain hidden in the domestic market.",
        "Validating before investing reduces risk and improves the choice of entry mode. Sustainable expansion begins with evidence, priorities, and a plan connecting market, operations, people, and finance."
      ],
      "takeaway": "Do not choose only a promising market. Choose a market your company is prepared to serve."
    },
    "es": {
      "category": "Internacionalización",
      "title": "Qué debe validar una pyme antes de entrar en un nuevo mercado",
      "preview": "Antes de expandirse, es esencial validar la demanda, la adaptación, los riesgos y la capacidad de ejecución.",
      "time": "8 min",
      "body": [
        "Un mercado atractivo por su tamaño puede no ser el mercado adecuado para una pyme. La decisión debe combinar demanda real, competencia, requisitos legales, costes logísticos, comportamiento cultural y adecuación de la propuesta de valor.",
        "También es necesario mirar hacia dentro: ¿la empresa dispone de capacidad productiva, equipo, financiación, socios y procesos para cumplir lo que promete? La internacionalización revela rápidamente fragilidades que podían permanecer ocultas en el mercado nacional.",
        "Validar antes de invertir reduce el riesgo y mejora la elección del modo de entrada. Una expansión sostenible comienza con evidencias, prioridades y un plan que conecte mercado, operaciones, personas y finanzas."
      ],
      "takeaway": "No elija solo un mercado prometedor. Elija un mercado que su empresa esté preparada para atender."
    }
  },  "lideranca-humana": {
    "pt": {
      "category": "Liderança",
      "title": "Liderar pessoas não é apenas distribuir tarefas",
      "preview": "Liderança verdadeira combina direção, escuta, confiança e responsabilidade.",
      "time": "6 min",
      "body": [
        "Liderar não significa apenas definir metas e acompanhar resultados. Significa criar condições para que as pessoas compreendam o seu papel, desenvolvam competências e participem verdadeiramente da evolução da organização.",
        "Equipas fortes precisam de clareza, confiança e espaço para comunicar dificuldades. Quando a liderança se limita ao controlo, as pessoas executam tarefas. Quando existe propósito, escuta e responsabilidade partilhada, elas ajudam a construir soluções.",
        "O desempenho sustentável nasce do equilíbrio entre exigência e valorização humana. Uma empresa cresce melhor quando as pessoas sabem o que se espera delas e sentem que o seu contributo tem significado."
      ],
      "takeaway": "Liderar é dar direção sem retirar voz, exigir sem desvalorizar e crescer sem deixar as pessoas para trás."
    },
    "en": {
      "category": "Leadership",
      "title": "Leading people is more than assigning tasks",
      "preview": "True leadership combines direction, listening, trust, and responsibility.",
      "time": "6 min",
      "body": [
        "Leadership is not only about setting goals and monitoring results. It means creating the conditions for people to understand their role, develop their skills, and take part in the organisation’s evolution.",
        "Strong teams need clarity, trust, and room to communicate difficulties. When leadership is limited to control, people merely execute tasks. When purpose, listening, and shared responsibility are present, they help build solutions.",
        "Sustainable performance comes from balancing expectations with human value. A company grows better when people know what is expected of them and feel that their contribution matters."
      ],
      "takeaway": "Leadership means giving direction without taking away people’s voice, demanding excellence without diminishing them, and growing without leaving them behind."
    },
    "es": {
      "category": "Liderazgo",
      "title": "Liderar personas es más que distribuir tareas",
      "preview": "El verdadero liderazgo combina dirección, escucha, confianza y responsabilidad.",
      "time": "6 min",
      "body": [
        "Liderar no significa solamente definir objetivos y controlar resultados. Significa crear las condiciones para que las personas comprendan su función, desarrollen sus capacidades y participen realmente en la evolución de la organización.",
        "Los equipos fuertes necesitan claridad, confianza y espacio para comunicar dificultades. Cuando el liderazgo se limita al control, las personas solo ejecutan tareas. Cuando existen propósito, escucha y responsabilidad compartida, ayudan a construir soluciones.",
        "El rendimiento sostenible nace del equilibrio entre exigencia y valoración humana. Una empresa crece mejor cuando las personas saben qué se espera de ellas y sienten que su contribución tiene significado."
      ],
      "takeaway": "Liderar es orientar sin quitar la voz, exigir sin desvalorizar y crecer sin dejar a las personas atrás."
    }
  },
  "sme-diagnosis": {
    "pt": {
      "category": "Diagnóstico e Estratégia",
      "title": "7 sinais de que a sua PME precisa de um diagnóstico estratégico",
      "preview": "Problemas recorrentes podem ser sintomas de prioridades, processos e indicadores desalinhados.",
      "time": "7 min",
      "body": [
        "Os sinais raramente aparecem isolados: decisões tomadas sempre com urgência, objetivos que mudam sem critério, tarefas duplicadas, informação dispersa, dificuldade em acompanhar clientes, indicadores insuficientes e crescimento que aumenta o esforço sem melhorar proporcionalmente os resultados.",
        "Quando vários destes sinais coexistem, corrigir apenas o problema mais visível tende a deslocar a dificuldade para outra área. Um diagnóstico estratégico liga causas e consequências, distingue urgência de importância e identifica o que deve ser resolvido primeiro.",
        "O resultado esperado não é um relatório abstrato. É um mapa de riscos e oportunidades, prioridades justificadas e um plano de ação com responsáveis, prazos e indicadores que a empresa consiga executar e acompanhar."
      ],
      "takeaway": "Antes de acelerar, compreenda o sistema. Clareza sobre as causas evita investimento em soluções para os sintomas."
    },
    "en": {
      "category": "Diagnosis and Strategy",
      "title": "7 signs your SME needs a strategic diagnosis",
      "preview": "Recurring problems may be symptoms of misaligned priorities, processes, and indicators.",
      "time": "7 min",
      "body": [
        "The signs rarely appear in isolation: decisions are always urgent, objectives change without clear criteria, tasks are duplicated, information is scattered, customer follow-up is difficult, indicators are insufficient, and growth increases effort without proportionally improving results.",
        "When several of these signs coexist, fixing only the most visible problem tends to shift the difficulty elsewhere. A strategic diagnosis connects causes and consequences, distinguishes urgency from importance, and identifies what should be addressed first.",
        "The expected result is not an abstract report. It is a map of risks and opportunities, justified priorities, and an action plan with owners, deadlines, and indicators that the company can execute and monitor."
      ],
      "takeaway": "Before accelerating, understand the system. Clarity about causes prevents investment in solutions for symptoms."
    },
    "es": {
      "category": "Diagnóstico y Estrategia",
      "title": "7 señales de que su pyme necesita un diagnóstico estratégico",
      "preview": "Los problemas recurrentes pueden ser síntomas de prioridades, procesos e indicadores desalineados.",
      "time": "7 min",
      "body": [
        "Las señales rara vez aparecen de forma aislada: decisiones siempre urgentes, objetivos que cambian sin criterio, tareas duplicadas, información dispersa, dificultad para acompañar clientes, indicadores insuficientes y crecimiento que aumenta el esfuerzo sin mejorar proporcionalmente los resultados.",
        "Cuando varias de estas señales coexisten, corregir solo el problema más visible suele trasladar la dificultad a otra área. Un diagnóstico estratégico conecta causas y consecuencias, distingue urgencia de importancia e identifica qué debe resolverse primero.",
        "El resultado esperado no es un informe abstracto. Es un mapa de riesgos y oportunidades, prioridades justificadas y un plan de acción con responsables, plazos e indicadores que la empresa pueda ejecutar y acompañar."
      ],
      "takeaway": "Antes de acelerar, comprenda el sistema. La claridad sobre las causas evita invertir en soluciones para los síntomas."
    }
  },
  "sme-automation": {
    "pt": {
      "category": "IA aplicada",
      "title": "IA nas PME: 5 processos que podem ser automatizados sem perder o valor humano",
      "preview": "Automatizar com critério liberta tempo para decisões, criatividade e relações comerciais.",
      "time": "8 min",
      "body": [
        "Cinco aplicações costumam gerar valor rapidamente: organizar pedidos de contacto, criar lembretes de acompanhamento, preparar primeiras versões de propostas, consolidar indicadores em relatórios e resumir reuniões com tarefas e responsáveis. Em todos os casos, a automação deve apoiar um processo previamente compreendido.",
        "A decisão humana continua indispensável para validar contexto, negociar, interpretar exceções, proteger relações e assumir responsabilidade. Dados pessoais ou confidenciais exigem regras de acesso, finalidade definida e ferramentas adequadas ao nível de risco.",
        "Uma PME deve começar por um processo repetitivo, mensurável e de baixo risco, testar com uma equipa pequena e comparar tempo, qualidade e erros antes de expandir. Automatizar o caos apenas torna o caos mais rápido."
      ],
      "takeaway": "Automatize tarefas previsíveis; preserve julgamento, empatia e responsabilidade nas decisões."
    },
    "en": {
      "category": "Applied AI",
      "title": "AI in SMEs: 5 processes that can be automated without losing human value",
      "preview": "Thoughtful automation frees time for decisions, creativity, and commercial relationships.",
      "time": "8 min",
      "body": [
        "Five applications often create value quickly: organising contact requests, creating follow-up reminders, preparing first drafts of proposals, consolidating indicators into reports, and summarising meetings with tasks and owners. In every case, automation should support a process that is already understood.",
        "Human judgement remains essential to validate context, negotiate, interpret exceptions, protect relationships, and assume responsibility. Personal or confidential data requires access rules, a defined purpose, and tools suited to the level of risk.",
        "An SME should begin with one repetitive, measurable, low-risk process, test it with a small team, and compare time, quality, and errors before expanding. Automating chaos only makes chaos faster."
      ],
      "takeaway": "Automate predictable tasks; preserve judgement, empathy, and accountability in decisions."
    },
    "es": {
      "category": "IA aplicada",
      "title": "IA en las pymes: 5 procesos que pueden automatizarse sin perder el valor humano",
      "preview": "Automatizar con criterio libera tiempo para decisiones, creatividad y relaciones comerciales.",
      "time": "8 min",
      "body": [
        "Cinco aplicaciones suelen generar valor rápidamente: organizar solicitudes de contacto, crear recordatorios de seguimiento, preparar primeras versiones de propuestas, consolidar indicadores en informes y resumir reuniones con tareas y responsables. En todos los casos, la automatización debe apoyar un proceso previamente comprendido.",
        "El criterio humano sigue siendo indispensable para validar el contexto, negociar, interpretar excepciones, proteger relaciones y asumir responsabilidades. Los datos personales o confidenciales exigen reglas de acceso, una finalidad definida y herramientas adecuadas al nivel de riesgo.",
        "Una pyme debe comenzar con un proceso repetitivo, medible y de bajo riesgo, probarlo con un equipo pequeño y comparar tiempo, calidad y errores antes de ampliarlo. Automatizar el caos solo hace que el caos sea más rápido."
      ],
      "takeaway": "Automatice tareas previsibles; preserve el criterio, la empatía y la responsabilidad en las decisiones."
    }
  },
  "portugal-entry": {
    "pt": {
      "category": "Mercado português",
      "title": "Entrada no mercado português: o que uma PME estrangeira deve validar antes de investir",
      "preview": "Procura, enquadramento, adaptação, parceiros e capacidade operacional devem ser validados antes do investimento.",
      "time": "9 min",
      "body": [
        "O primeiro passo é validar a oportunidade: quem compra, que problema pretende resolver, quais alternativas já existem e que adaptação a proposta de valor exige. Proximidade linguística ou cultural não substitui evidência de procura nem análise da concorrência.",
        "Depois, a empresa deve avaliar o modo de entrada, enquadramento jurídico e fiscal, proteção de dados, contratação, financiamento, parceiros locais e custos reais de operação. Estas matérias exigem confirmação com profissionais habilitados antes de qualquer compromisso vinculativo.",
        "Por fim, é necessário verificar a capacidade interna para servir o mercado: equipa, processos, suporte, comunicação, tesouraria e indicadores. Um plano de entrada responsável liga mercado, conformidade, operação, pessoas e finanças numa sequência executável."
      ],
      "takeaway": "Investir em Portugal deve ser uma decisão informada por evidência local, capacidade interna e validação especializada."
    },
    "en": {
      "category": "Portuguese market",
      "title": "Entering the Portuguese market: what a foreign SME should validate before investing",
      "preview": "Demand, framework, adaptation, partners, and operational capacity should be validated before investment.",
      "time": "9 min",
      "body": [
        "The first step is to validate the opportunity: who buys, which problem they want to solve, which alternatives already exist, and what adaptation the value proposition requires. Linguistic or cultural proximity does not replace evidence of demand or competitive analysis.",
        "The company should then assess the entry mode, legal and tax framework, data protection, recruitment, financing, local partners, and the real costs of operating. These matters require confirmation with qualified professionals before any binding commitment.",
        "Finally, the company must verify its internal ability to serve the market: team, processes, support, communication, cash flow, and indicators. A responsible market-entry plan connects market, compliance, operations, people, and finance in an executable sequence."
      ],
      "takeaway": "Investing in Portugal should be a decision informed by local evidence, internal capability, and specialist validation."
    },
    "es": {
      "category": "Mercado portugués",
      "title": "Entrada en el mercado portugués: qué debe validar una pyme extranjera antes de invertir",
      "preview": "La demanda, el marco, la adaptación, los socios y la capacidad operativa deben validarse antes de invertir.",
      "time": "9 min",
      "body": [
        "El primer paso es validar la oportunidad: quién compra, qué problema desea resolver, qué alternativas existen y qué adaptación requiere la propuesta de valor. La proximidad lingüística o cultural no sustituye las evidencias de demanda ni el análisis de la competencia.",
        "Después, la empresa debe evaluar el modo de entrada, el marco jurídico y fiscal, la protección de datos, la contratación, la financiación, los socios locales y los costes reales de operación. Estas materias requieren confirmación con profesionales cualificados antes de cualquier compromiso vinculante.",
        "Por último, es necesario verificar la capacidad interna para atender el mercado: equipo, procesos, soporte, comunicación, tesorería e indicadores. Un plan de entrada responsable conecta mercado, cumplimiento, operaciones, personas y finanzas en una secuencia ejecutable."
      ],
      "takeaway": "Invertir en Portugal debe ser una decisión basada en evidencias locales, capacidad interna y validación especializada."
    }
  },
  "sme-priorities": {
    "pt": {
      "category": "Gestão e execução",
      "title": "Da lista de tarefas à execução: como definir prioridades numa PME",
      "preview": "Priorizar é escolher o que gera valor agora, atribuir responsabilidade e acompanhar o resultado.",
      "time": "6 min",
      "body": [
        "Uma lista extensa não é um plano. Comece por relacionar cada tarefa com um objetivo, avaliando impacto, urgência, esforço, risco e dependências. Aquilo que parece urgente pode ser apenas ruidoso; aquilo que é importante deve produzir uma mudança observável.",
        "Limite o ciclo de execução a poucas prioridades, designe uma pessoa responsável por cada resultado e defina prazo, critério de conclusão e indicador. Responsabilidade partilhada por todos costuma significar responsabilidade assumida por ninguém.",
        "Uma revisão semanal curta permite remover bloqueios, atualizar decisões e aprender com os resultados. A disciplina não está em cumprir uma agenda rígida, mas em proteger o tempo necessário para o trabalho que sustenta a estratégia."
      ],
      "takeaway": "Prioridade sem responsável, prazo e critério de conclusão continua a ser apenas uma intenção."
    },
    "en": {
      "category": "Management and execution",
      "title": "From task list to execution: how to set priorities in an SME",
      "preview": "Prioritising means choosing what creates value now, assigning ownership, and monitoring the result.",
      "time": "6 min",
      "body": [
        "A long list is not a plan. Begin by linking each task to an objective, assessing impact, urgency, effort, risk, and dependencies. What appears urgent may simply be noisy; what is important should produce an observable change.",
        "Limit each execution cycle to a few priorities, assign one owner to each result, and define a deadline, completion criterion, and indicator. Responsibility shared by everyone often means responsibility owned by no one.",
        "A short weekly review makes it possible to remove obstacles, update decisions, and learn from results. Discipline is not about following a rigid agenda, but protecting the time required for work that supports the strategy."
      ],
      "takeaway": "A priority without an owner, deadline, and completion criterion remains only an intention."
    },
    "es": {
      "category": "Gestión y ejecución",
      "title": "De la lista de tareas a la ejecución: cómo definir prioridades en una pyme",
      "preview": "Priorizar significa elegir lo que genera valor ahora, asignar responsabilidad y acompañar el resultado.",
      "time": "6 min",
      "body": [
        "Una lista extensa no es un plan. Comience relacionando cada tarea con un objetivo y evalúe impacto, urgencia, esfuerzo, riesgo y dependencias. Lo que parece urgente puede ser solo ruido; lo importante debe producir un cambio observable.",
        "Limite cada ciclo de ejecución a pocas prioridades, designe una persona responsable de cada resultado y defina plazo, criterio de conclusión e indicador. La responsabilidad compartida por todos suele significar responsabilidad asumida por nadie.",
        "Una revisión semanal breve permite eliminar bloqueos, actualizar decisiones y aprender de los resultados. La disciplina no consiste en cumplir una agenda rígida, sino en proteger el tiempo necesario para el trabajo que sostiene la estrategia."
      ],
      "takeaway": "Una prioridad sin responsable, plazo y criterio de conclusión sigue siendo solo una intención."
    }
  }
};

const knowledgeUi = {
  "pt": { "listLabel": "Artigos em destaque", "open": "Abrir artigo", "close": "Fechar artigo", "cta": "Conversar sobre este desafio", "insight": "Insight NEXA360", "more": "Ver mais artigos", "less": "Ver menos artigos" },
  "en": { "listLabel": "Featured articles", "open": "Open article", "close": "Close article", "cta": "Discuss this challenge", "insight": "NEXA360 Insight", "more": "View more articles", "less": "View fewer articles" },
  "es": { "listLabel": "Artículos destacados", "open": "Abrir artículo", "close": "Cerrar artículo", "cta": "Conversar sobre este desafío", "insight": "Insight NEXA360", "more": "Ver más artículos", "less": "Ver menos artículos" }
};

const legalContent = {
  "privacy": {
    "pt": { "title": "Privacidade", "sections": [
      ["Situação atual", "Este website funciona em modo de demonstração. O formulário não transmite nem guarda os dados introduzidos e não está ligado ao CRM NEXA360. O projeto é desenvolvido sob a responsabilidade de Mônica Cardoso."],
      ["Preferência de idioma", "O navegador pode guardar localmente apenas a preferência PT, EN ou ES. Esta informação permanece no dispositivo e não identifica diretamente o visitante."],
      ["Alojamento e ligações externas", "O website é publicado através do GitHub Pages. As ligações externas conduzem aos respetivos fornecedores, que aplicam as suas próprias políticas."],
      ["Antes da recolha real", "Antes de ativar qualquer formulário operacional, a NEXA360 publicará a identidade e os contactos do responsável pelo tratamento, categorias de dados, finalidades, fundamento jurídico, destinatários, transferências, conservação, medidas aplicáveis e canal para reclamação."],
      ["Direitos dos titulares", "Quando existir tratamento de dados pessoais, os titulares poderão, nos termos aplicáveis, pedir acesso, retificação, apagamento, limitação, portabilidade ou oposição, retirar consentimento quando esse for o fundamento e apresentar reclamação à Comissão Nacional de Proteção de Dados."],
      ["Atualização", "Esta informação será revista antes da recolha de dados ou do início da atividade comercial. Última atualização: 2 de setembro de 2026."]
    ]},
    "en": { "title": "Privacy", "sections": [
      ["Current status", "This website operates in demonstration mode. The form neither sends nor stores entered data and is not connected to NEXA360 CRM. The project is developed under the responsibility of Mônica Cardoso."],
      ["Language preference", "The browser may store locally only the PT, EN, or ES preference. This information remains on the device and does not directly identify the visitor."],
      ["Hosting and external links", "The website is published through GitHub Pages. External links lead to the relevant providers, which apply their own policies."],
      ["Before real collection", "Before activating any operational form, NEXA360 will publish the controller’s identity and contact details, data categories, purposes, legal basis, recipients, transfers, retention, applicable measures, and complaint channel."],
      ["Data-subject rights", "Where personal data is processed, data subjects may, as applicable, request access, rectification, erasure, restriction, portability or objection, withdraw consent where it is the legal basis, and complain to the Portuguese Data Protection Authority."],
      ["Update", "This notice will be reviewed before data collection or commercial activity begins. Last updated: 2 September 2026."]
    ]},
    "es": { "title": "Privacidad", "sections": [
      ["Situación actual", "Este sitio funciona en modo de demostración. El formulario no transmite ni almacena los datos introducidos y no está conectado al CRM NEXA360. El proyecto se desarrolla bajo la responsabilidad de Mônica Cardoso."],
      ["Preferencia de idioma", "El navegador puede guardar localmente únicamente la preferencia PT, EN o ES. Esta información permanece en el dispositivo y no identifica directamente al visitante."],
      ["Alojamiento y enlaces externos", "El sitio se publica mediante GitHub Pages. Los enlaces externos conducen a sus respectivos proveedores, que aplican sus propias políticas."],
      ["Antes de la recogida real", "Antes de activar cualquier formulario operativo, NEXA360 publicará la identidad y los datos de contacto del responsable, categorías de datos, finalidades, base jurídica, destinatarios, transferencias, conservación, medidas aplicables y canal de reclamación."],
      ["Derechos de los interesados", "Cuando se traten datos personales, los interesados podrán, según corresponda, solicitar acceso, rectificación, supresión, limitación, portabilidad u oposición, retirar el consentimiento cuando sea la base jurídica y reclamar ante la autoridad portuguesa de protección de datos."],
      ["Actualización", "Este aviso será revisado antes de recoger datos o iniciar la actividad comercial. Última actualización: 2 de septiembre de 2026."]
    ]}
  },
  "cookies": {
    "pt": { "title": "Cookies e armazenamento local", "sections": [
      ["Sem rastreamento", "A versão atual não utiliza cookies analíticos, publicitários ou de definição de perfis e não integra ferramentas de rastreamento de terceiros."],
      ["Armazenamento local", "A preferência de idioma pode ser guardada no armazenamento local do navegador para manter a opção escolhida. Pode eliminá-la através das definições de dados do navegador."],
      ["Alterações futuras", "Se forem introduzidas tecnologias não essenciais, o site será atualizado com informação adequada e, quando legalmente exigido, um mecanismo de consentimento anterior à utilização."]
    ]},
    "en": { "title": "Cookies and local storage", "sections": [
      ["No tracking", "The current version does not use analytics, advertising, or profiling cookies and does not integrate third-party tracking tools."],
      ["Local storage", "The language preference may be stored in the browser’s local storage to keep the selected option. It can be removed through the browser’s data settings."],
      ["Future changes", "If non-essential technologies are introduced, the site will be updated with appropriate information and, where legally required, a consent mechanism before their use."]
    ]},
    "es": { "title": "Cookies y almacenamiento local", "sections": [
      ["Sin seguimiento", "La versión actual no utiliza cookies analíticas, publicitarias o de elaboración de perfiles ni integra herramientas de seguimiento de terceros."],
      ["Almacenamiento local", "La preferencia de idioma puede guardarse en el almacenamiento local del navegador para mantener la opción elegida. Puede eliminarse desde la configuración de datos del navegador."],
      ["Cambios futuros", "Si se introducen tecnologías no esenciales, el sitio se actualizará con información adecuada y, cuando sea legalmente exigible, con un mecanismo de consentimiento previo a su uso."]
    ]}
  },
  "terms": {
    "pt": { "title": "Termos de utilização e condições preliminares", "sections": [
      ["Natureza do website", "Este website apresenta a proposta, metodologias e demonstrações da NEXA360. Nesta fase, possui natureza institucional e demonstrativa. A abertura oficial da atividade está prevista para depois de novembro de 2026."],
      ["Identificação", "A NEXA360 é um projeto empresarial em desenvolvimento, sob responsabilidade de Mônica Cardoso. A identificação fiscal, a morada comercial e os contactos operacionais serão publicados antes da aceitação de contratos ou pagamentos."],
      ["Contratação", "Cada colaboração depende de proposta ou contrato escrito com âmbito, entregáveis, responsabilidades, calendário, investimento, impostos, pagamento, validade e critérios de aceitação. A informação do website não constitui, por si só, uma proposta contratual."],
      ["Edição fundadora", "A condição indicada para o Diagnóstico 360° é de 650 € acrescida de IVA, com entrega prevista em 15 dias úteis, sujeita à seleção da organização, confirmação do âmbito e aceitação da proposta aplicável."],
      ["Pagamentos, alterações e cancelamento", "Esta versão do website não recebe pagamentos. Meios e prazos de pagamento, faturação, alterações, reagendamento, suspensão e cancelamento serão definidos na proposta e aceites antes do início. Permanecem salvaguardados os direitos imperativos aplicáveis ao cliente."],
      ["Sem aconselhamento vinculativo", "Os conteúdos não substituem diagnóstico individual nem aconselhamento jurídico, fiscal, financeiro ou técnico prestado por profissionais habilitados."],
      ["Resultados e responsabilidade", "A NEXA360 compromete-se com a diligência, o método e os entregáveis acordados, mas não garante resultados comerciais específicos. O cliente é responsável pela exatidão da informação fornecida e pelas decisões que adotar."],
      ["Confidencialidade e dados", "A utilização de informação empresarial e dados pessoais será limitada ao âmbito autorizado e regulada na proposta, no contrato ou em instrumento próprio."],
      ["Demonstração CRM", "O CRM público utiliza dados fictícios. Não devem ser introduzidos dados pessoais, empresariais confidenciais ou credenciais reais."],
      ["Propriedade e ligações", "A marca, os textos, os elementos visuais e as demonstrações pertencem aos respetivos titulares. Ligações externas estão sujeitas aos termos dos respetivos serviços."],
      ["Questões e litígios", "Questões contratuais serão tratadas pelo contacto indicado na proposta. Antes da atividade comercial serão publicados o canal formal de reclamações e, quando aplicável, informação sobre resolução alternativa de litígios de consumo."],
      ["Atualização", "Estes termos serão revistos antes da abertura comercial. Última atualização: 2 de setembro de 2026."]
    ]},
    "en": { "title": "Terms of use and preliminary conditions", "sections": [
      ["Nature of the website", "This website presents NEXA360’s proposition, methodologies, and demonstrations. At this stage, it is institutional and demonstrative in nature. The official start of activity is planned for after November 2026."],
      ["Identification", "NEXA360 is a business project under development, led by Mônica Cardoso. Tax identification, business address, and operational contact details will be published before any contract or payment is accepted."],
      ["Engagement", "Each engagement requires a written proposal or contract defining scope, deliverables, responsibilities, schedule, fees, taxes, payment, validity, and acceptance criteria. Website information is not, by itself, a contractual offer."],
      ["Founding edition", "The stated fee for the 360° Diagnosis is €650 plus VAT, with expected delivery within 15 working days, subject to selection, scope confirmation, and acceptance of the applicable proposal."],
      ["Payments, changes, and cancellation", "This website does not accept payments. Payment and invoicing terms, changes, rescheduling, suspension, and cancellation will be defined and accepted before work begins. Any mandatory client rights remain protected."],
      ["No binding advice", "Content does not replace an individual diagnosis or legal, tax, financial, or technical advice provided by qualified professionals."],
      ["Results and liability", "NEXA360 commits to due care, method, and agreed deliverables but does not guarantee specific business results. Clients are responsible for the accuracy of information supplied and the decisions they make."],
      ["Confidentiality and data", "Use of business information and personal data will be limited to the authorised scope and governed by the proposal, contract, or a separate instrument."],
      ["CRM demonstration", "The public CRM uses fictional data. Personal data, confidential business information, or real credentials must not be entered."],
      ["Ownership and links", "The brand, texts, visual elements, and demonstrations belong to their respective owners. External links are subject to the terms of their respective services."],
      ["Questions and disputes", "Contract questions will use the contact specified in the proposal. A formal complaints channel and, where applicable, consumer alternative-dispute-resolution information will be published before commercial activity."],
      ["Update", "These terms will be reviewed before commercial launch. Last updated: 2 September 2026."]
    ]},
    "es": { "title": "Términos de uso y condiciones preliminares", "sections": [
      ["Naturaleza del sitio", "Este sitio presenta la propuesta, las metodologías y las demostraciones de NEXA360. En esta fase, tiene carácter institucional y demostrativo. El inicio oficial de la actividad está previsto para después de noviembre de 2026."],
      ["Identificación", "NEXA360 es un proyecto empresarial en desarrollo, bajo la responsabilidad de Mônica Cardoso. La identificación fiscal, dirección comercial y contactos operativos se publicarán antes de aceptar contratos o pagos."],
      ["Contratación", "Cada colaboración requiere una propuesta o contrato escrito con alcance, entregables, responsabilidades, calendario, inversión, impuestos, pago, validez y criterios de aceptación. La información del sitio no constituye por sí sola una oferta contractual."],
      ["Edición fundadora", "La condición indicada para el Diagnóstico 360° es de 650 € más IVA, con entrega prevista en 15 días hábiles, sujeta a selección, confirmación del alcance y aceptación de la propuesta aplicable."],
      ["Pagos, cambios y cancelación", "Este sitio no recibe pagos. Los medios y plazos de pago, facturación, cambios, reprogramación, suspensión y cancelación se definirán y aceptarán antes de iniciar el trabajo. Se mantienen los derechos imperativos aplicables al cliente."],
      ["Sin asesoramiento vinculante", "Los contenidos no sustituyen un diagnóstico individual ni el asesoramiento jurídico, fiscal, financiero o técnico prestado por profesionales cualificados."],
      ["Resultados y responsabilidad", "NEXA360 se compromete con la diligencia, el método y los entregables acordados, pero no garantiza resultados comerciales específicos. El cliente responde por la exactitud de la información facilitada y por sus decisiones."],
      ["Confidencialidad y datos", "El uso de información empresarial y datos personales se limitará al alcance autorizado y se regulará en la propuesta, contrato o instrumento específico."],
      ["Demostración del CRM", "El CRM público utiliza datos ficticios. No deben introducirse datos personales, información empresarial confidencial ni credenciales reales."],
      ["Propiedad y enlaces", "La marca, los textos, los elementos visuales y las demostraciones pertenecen a sus titulares. Los enlaces externos están sujetos a las condiciones de los respectivos servicios."],
      ["Consultas y litigios", "Las consultas contractuales se atenderán por el contacto indicado en la propuesta. Antes de la actividad comercial se publicará el canal formal de reclamaciones y, cuando corresponda, la información sobre resolución alternativa de litigios de consumo."],
      ["Actualización", "Estos términos serán revisados antes de la apertura comercial. Última actualización: 2 de septiembre de 2026."]
    ]}
  },
  "international": {
    "pt": { "title": "Política internacional — UE e CPLP", "sections": [
      ["Âmbito", "A NEXA360 tem base em Portugal e prepara serviços para organizações com atividade ou projetos internacionais. A simples disponibilidade do website noutro país não constitui oferta automática nem confirma que um serviço possa ser prestado nesse mercado."],
      ["União Europeia e EEE", "Nos projetos que envolvam dados pessoais abrangidos pelo RGPD, a NEXA360 aplicará os princípios de licitude, transparência, minimização, limitação da finalidade, conservação adequada, segurança e responsabilidade. Regras nacionais complementares e direitos obrigatórios do cliente serão verificados para o país envolvido."],
      ["Comunidade dos Países de Língua Portuguesa", "A abordagem internacional pode abranger Angola, Brasil, Cabo Verde, Guiné-Bissau, Guiné Equatorial, Moçambique, Portugal, São Tomé e Príncipe e Timor-Leste. Cada projeto será analisado segundo a legislação, autoridades, requisitos fiscais, comerciais, cambiais, laborais e de proteção de dados aplicáveis no país de destino."],
      ["Brasil e outras jurisdições", "Quando aplicável, projetos relacionados com o Brasil considerarão a Lei Geral de Proteção de Dados Pessoais — LGPD. Nos restantes mercados serão identificadas as normas nacionais em vigor e, quando necessário, obtido apoio de profissionais ou parceiros locais qualificados."],
      ["Transferências internacionais de dados", "Dados pessoais não serão transferidos para fora do EEE sem fundamento jurídico e salvaguardas adequadas. Quando aplicável, serão avaliadas decisões de adequação, cláusulas contratuais-tipo, medidas suplementares e requisitos do país de origem e de destino."],
      ["Contratação internacional", "A proposta identificará território, idioma de trabalho, moeda, impostos, custos bancários, calendário, lei aplicável, resolução de litígios, responsabilidades e eventuais parceiros. Nenhuma condição local será presumida ou substituída por este texto geral."],
      ["Comunicação e acessibilidade", "O website disponibiliza conteúdos em português, inglês e espanhol para facilitar o acesso internacional. Em caso de divergência, a versão contratual expressamente aceite pelas partes prevalecerá sobre traduções informativas."],
      ["Revisão por mercado", "Antes de iniciar atividade num novo país, a NEXA360 realizará uma verificação jurídica, fiscal e operacional proporcional ao serviço. Esta política é informativa e será atualizada à medida que os mercados forem efetivamente ativados. Última atualização: 2 de setembro de 2026."]
    ]},
    "en": { "title": "International policy — EU and CPLP", "sections": [
      ["Scope", "NEXA360 is based in Portugal and is preparing services for organisations with international operations or projects. The website’s availability in another country is not an automatic offer and does not confirm that a service can be provided in that market."],
      ["European Union and EEA", "For projects involving personal data covered by the GDPR, NEXA360 will apply lawfulness, transparency, minimisation, purpose limitation, appropriate retention, security, and accountability. Supplementary national rules and mandatory client rights will be assessed for the country involved."],
      ["Community of Portuguese Language Countries", "The international approach may cover Angola, Brazil, Cabo Verde, Guinea-Bissau, Equatorial Guinea, Mozambique, Portugal, São Tomé and Príncipe, and Timor-Leste. Each project will be assessed against the destination country’s applicable legal, regulatory, tax, commercial, currency, labour, and data-protection requirements."],
      ["Brazil and other jurisdictions", "Where applicable, projects related to Brazil will take account of the Brazilian General Personal Data Protection Law — LGPD. In other markets, current national rules will be identified and qualified local professionals or partners engaged where necessary."],
      ["International data transfers", "Personal data will not be transferred outside the EEA without a legal basis and appropriate safeguards. Where relevant, adequacy decisions, standard contractual clauses, supplementary measures, and origin and destination-country requirements will be assessed."],
      ["International engagement", "The proposal will identify territory, working language, currency, taxes, bank charges, schedule, applicable law, dispute resolution, responsibilities, and any partners. No local condition is presumed or replaced by this general notice."],
      ["Communication and accessibility", "The website provides content in Portuguese, English, and Spanish to facilitate international access. In case of discrepancy, the contractual version expressly accepted by the parties will prevail over informative translations."],
      ["Market-by-market review", "Before operating in a new country, NEXA360 will carry out a legal, tax, and operational review proportionate to the service. This policy is informative and will be updated as markets are effectively activated. Last updated: 2 September 2026."]
    ]},
    "es": { "title": "Política internacional — UE y CPLP", "sections": [
      ["Ámbito", "NEXA360 tiene su base en Portugal y prepara servicios para organizaciones con actividad o proyectos internacionales. La disponibilidad del sitio en otro país no constituye una oferta automática ni confirma que un servicio pueda prestarse en ese mercado."],
      ["Unión Europea y EEE", "En proyectos con datos personales sujetos al RGPD, NEXA360 aplicará los principios de licitud, transparencia, minimización, limitación de finalidad, conservación adecuada, seguridad y responsabilidad. Se evaluarán las normas nacionales complementarias y los derechos obligatorios del cliente."],
      ["Comunidad de Países de Lengua Portuguesa", "El enfoque internacional puede incluir Angola, Brasil, Cabo Verde, Guinea-Bisáu, Guinea Ecuatorial, Mozambique, Portugal, Santo Tomé y Príncipe y Timor Oriental. Cada proyecto será evaluado según los requisitos legales, fiscales, comerciales, cambiarios, laborales y de protección de datos del país de destino."],
      ["Brasil y otras jurisdicciones", "Cuando corresponda, los proyectos relacionados con Brasil considerarán la Ley General de Protección de Datos Personales — LGPD. En los demás mercados se identificarán las normas nacionales vigentes y, cuando sea necesario, se recurrirá a profesionales o socios locales cualificados."],
      ["Transferencias internacionales de datos", "Los datos personales no serán transferidos fuera del EEE sin base jurídica y garantías adecuadas. Cuando proceda, se evaluarán decisiones de adecuación, cláusulas contractuales tipo, medidas suplementarias y requisitos de los países de origen y destino."],
      ["Contratación internacional", "La propuesta identificará territorio, idioma de trabajo, moneda, impuestos, gastos bancarios, calendario, ley aplicable, resolución de litigios, responsabilidades y posibles socios. Este aviso general no presume ni sustituye condiciones locales."],
      ["Comunicación y accesibilidad", "El sitio ofrece contenidos en portugués, inglés y español para facilitar el acceso internacional. En caso de discrepancia, la versión contractual expresamente aceptada por las partes prevalecerá sobre las traducciones informativas."],
      ["Revisión por mercado", "Antes de operar en un nuevo país, NEXA360 realizará una revisión jurídica, fiscal y operativa proporcional al servicio. Esta política es informativa y se actualizará a medida que se activen los mercados. Última actualización: 2 de septiembre de 2026."]
    ]}
  }
};

let currentArticleId = null;
let knowledgeExpanded = false;
let currentLegalKey = null;

let currentLanguage = 'pt';
let menuIsOpen = false;
const textNodes = [];
const attributeNodes = [];

function normaliseText(value) {
  return value.replace(/\s+/g, ' ').trim();
}

function prepareLanguageContent() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ['SCRIPT', 'STYLE'].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
      return normaliseText(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });

  while (walker.nextNode()) {
    const node = walker.currentNode;
    const raw = node.nodeValue;
    const key = normaliseText(raw);
    if (translations.en[key] || translations.es[key]) {
      textNodes.push({
        node,
        key,
        before: raw.match(/^\s*/)?.[0] || '',
        after: raw.match(/\s*$/)?.[0] || ''
      });
    }
  }

  document.querySelectorAll('[aria-label], [title], img[alt]').forEach((element) => {
    ['aria-label', 'title', 'alt'].forEach((name) => {
      if (!element.hasAttribute(name)) return;
      const key = element.getAttribute(name);
      if (attributeTranslations.en[key] || attributeTranslations.es[key]) {
        attributeNodes.push({ element, name, key });
      }
    });
  });
}

function translate(key, language = currentLanguage) {
  if (language === 'pt') return key;
  return translations[language]?.[key] || key;
}

function translateAttribute(key, language = currentLanguage) {
  if (language === 'pt') return key;
  return attributeTranslations[language]?.[key] || key;
}

function setMenuAccessibilityLabel() {
  const key = menuIsOpen ? 'Fechar menu' : 'Abrir menu';
  menuToggle.setAttribute('aria-label', translateAttribute(key));
  menuToggle.setAttribute('aria-expanded', String(menuIsOpen));
  mobilePanel.setAttribute('aria-hidden', String(!menuIsOpen));
  mobilePanel.toggleAttribute('inert', !menuIsOpen);
}

function setLanguage(language, save = true) {
  if (!pageMeta[language]) return;
  currentLanguage = language;

  textNodes.forEach((item) => {
    item.node.nodeValue = `${item.before}${translate(item.key, language)}${item.after}`;
  });

  attributeNodes.forEach((item) => {
    item.element.setAttribute(item.name, translateAttribute(item.key, language));
  });

  languageButtons.forEach((button) => {
    const active = button.dataset.lang === language;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });

  const selectedMeta = pageMeta[language];
  document.documentElement.lang = selectedMeta.lang;
  document.title = selectedMeta.title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', selectedMeta.description);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', selectedMeta.ogTitle);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', selectedMeta.ogDescription);
  setMenuAccessibilityLabel();
  renderKnowledge(language);
  if (currentArticleId && articleModal.classList.contains('open')) renderArticleModal(currentArticleId, language);
  if (currentLegalKey && legalModal.classList.contains('open')) renderLegalModal(currentLegalKey, language);

  if (save) {
    try { localStorage.setItem('nexa360-language', language); } catch (_) { /* local files may restrict storage */ }
  }
}

function renderKnowledge(language = currentLanguage) {
  const ui = knowledgeUi[language] || knowledgeUi.pt;
  document.querySelector('.article-list')?.setAttribute('aria-label', ui.listLabel);
  closeArticleModal?.setAttribute('aria-label', ui.close);
  articleConversation.textContent = ui.cta;
  const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  arrow.innerHTML = '<use href="#i-arrow"></use>';
  articleConversation.appendChild(arrow);
  if (knowledgeToggle) {
    knowledgeToggle.textContent = knowledgeExpanded ? ui.less : ui.more;
    const toggleArrow = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    toggleArrow.innerHTML = '<use href="#i-arrow"></use>';
    knowledgeToggle.appendChild(toggleArrow);
    knowledgeToggle.setAttribute('aria-expanded', String(knowledgeExpanded));
  }

  articleRows.forEach((row) => {
    const item = articleContent[row.dataset.article]?.[language] || articleContent[row.dataset.article]?.pt;
    if (!item) return;
    row.querySelector('small').textContent = item.category;
    row.querySelector('.article-title').textContent = item.title;
    row.querySelector('.article-preview').textContent = item.preview;
    row.querySelector('.article-time').textContent = item.time;
    row.setAttribute('aria-label', `${ui.open}: ${item.title}`);
    row.setAttribute('aria-haspopup', 'dialog');
    row.setAttribute('aria-controls', 'articleModal');
  });
}

function openAccessibleDialog(dialog, initialFocus) {
  const activeElement = document.activeElement;
  if (activeElement instanceof HTMLElement) dialogReturnFocus.set(dialog, activeElement);
  dialog.hidden = false;
  dialog.classList.add('open');
  document.body.classList.add('modal-open');
  initialFocus?.focus();
}

function closeAccessibleDialog(dialog) {
  if (dialog.hidden) return;
  dialog.classList.remove('open');
  dialog.hidden = true;
  if (dialogElements.every((item) => item.hidden)) document.body.classList.remove('modal-open');
  const returnTarget = dialogReturnFocus.get(dialog);
  if (returnTarget?.isConnected) returnTarget.focus();
  dialogReturnFocus.delete(dialog);
}

function trapDialogFocus(event, dialog) {
  const focusable = [...dialog.querySelectorAll(focusableSelector)].filter((element) => !element.hidden);
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function renderArticleModal(articleId, language = currentLanguage) {
  const item = articleContent[articleId]?.[language] || articleContent[articleId]?.pt;
  const ui = knowledgeUi[language] || knowledgeUi.pt;
  if (!item) return;
  articleModalCategory.textContent = item.category;
  articleModalTime.textContent = item.time;
  articleModalTitle.textContent = item.title;
  articleModalBody.innerHTML = `${item.body.map((paragraph) => `<p>${paragraph}</p>`).join('')}<blockquote><strong>${ui.insight}</strong><span>${item.takeaway}</span></blockquote>`;
  articleModal.querySelector('.article-modal-footer > span').textContent = ui.insight;
}

function renderLegalModal(key, language = currentLanguage) {
  const content = legalContent[key]?.[language] || legalContent[key]?.pt;
  if (!content) return;
  legalModalTitle.textContent = content.title;
  legalModalBody.innerHTML = content.sections.map(([heading, text]) => `<section><h4>${heading}</h4><p>${text}</p></section>`).join('');
}

function showLegalModal(key) {
  if (!legalContent[key]) return;
  currentLegalKey = key;
  renderLegalModal(key);
  openAccessibleDialog(legalModal, closeLegalModal);
}

function hideLegalModal() {
  closeAccessibleDialog(legalModal);
}

function showArticle(articleId) {
  currentArticleId = articleId;
  renderArticleModal(articleId);
  openAccessibleDialog(articleModal, closeArticleModal);
}

function hideArticleModal() {
  closeAccessibleDialog(articleModal);
}

function selectValue(value, moveFocus = false) {
  valueButtons.forEach((button) => {
    const active = button.dataset.value === value;
    button.classList.toggle('active', active);
    button.setAttribute('aria-selected', String(active));
    button.tabIndex = active ? 0 : -1;
    if (active && moveFocus) button.focus();
  });
  valuePanels.forEach((panel) => { panel.hidden = panel.dataset.valuePanel !== value; });
}

valueButtons.forEach((button, index) => {
  button.addEventListener('click', () => selectValue(button.dataset.value));
  button.addEventListener('keydown', (event) => {
    let nextIndex = null;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') nextIndex = (index + 1) % valueButtons.length;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') nextIndex = (index - 1 + valueButtons.length) % valueButtons.length;
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = valueButtons.length - 1;
    if (nextIndex === null) return;
    event.preventDefault();
    selectValue(valueButtons[nextIndex].dataset.value, true);
  });
});

articleRows.forEach((row) => {
  row.addEventListener('click', () => showArticle(row.dataset.article));
});

knowledgeToggle?.addEventListener('click', () => {
  knowledgeExpanded = !knowledgeExpanded;
  extraArticleRows.forEach((row) => { row.hidden = !knowledgeExpanded; });
  renderKnowledge();
});

closeArticleModal.addEventListener('click', hideArticleModal);
articleModal.addEventListener('click', (event) => { if (event.target === articleModal) hideArticleModal(); });
document.querySelectorAll('[data-legal]').forEach((button) => button.addEventListener('click', () => showLegalModal(button.dataset.legal)));
closeLegalModal.addEventListener('click', hideLegalModal);
legalModal.addEventListener('click', (event) => { if (event.target === legalModal) hideLegalModal(); });
articleConversation.addEventListener('click', () => {
  hideArticleModal();
  scrollToSection('contacto');
});

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  menuIsOpen = false;
  mobilePanel.classList.remove('open');
  menuToggle.innerHTML = '<svg><use href="#i-menu"></use></svg>';
  setMenuAccessibilityLabel();
}

document.querySelectorAll('[data-scroll]').forEach((element) => {
  element.addEventListener('click', () => {
    const challengeKey = element.dataset.selectChallenge;
    if (challengeKey) {
      const challengeSelect = form?.querySelector('[name="challenge"]');
      const translatedChallenge = translate(challengeKey);
      const matchingOption = [...(challengeSelect?.options || [])].find((option) => normaliseText(option.textContent) === translatedChallenge);
      if (challengeSelect && matchingOption) challengeSelect.value = matchingOption.value;
    }
    scrollToSection(element.dataset.scroll);
  });
});

menuToggle.addEventListener('click', () => {
  menuIsOpen = !menuIsOpen;
  mobilePanel.classList.toggle('open', menuIsOpen);
  menuToggle.innerHTML = `<svg><use href="#${menuIsOpen ? 'i-x' : 'i-menu'}"></use></svg>`;
  setMenuAccessibilityLabel();
});

languageButtons.forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang));
});

function updateScroll() {
  const max = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  progress.style.width = `${max ? (window.scrollY / max) * 100 : 0}%`;
  header.classList.toggle('is-scrolled', window.scrollY > 24);

  let active = 'inicio';
  sectionIds.forEach((id) => {
    const element = document.getElementById(id);
    if (element && element.getBoundingClientRect().top <= 145) active = id;
  });
  document.querySelectorAll('.desktop-nav button').forEach((button) => {
    button.classList.toggle('active', button.dataset.scroll === active);
  });
}

window.addEventListener('scroll', updateScroll, { passive: true });
updateScroll();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: 0.12 });
document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element));

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
  openAccessibleDialog(modal, closeModal);
});

function hideModal() {
  closeAccessibleDialog(modal);
}
closeModal.addEventListener('click', hideModal);
modal.addEventListener('click', (event) => { if (event.target === modal) hideModal(); });
document.addEventListener('keydown', (event) => {
  const openDialog = dialogElements.find((dialog) => !dialog.hidden);
  if (!openDialog) return;
  if (event.key === 'Escape') {
    if (openDialog === modal) hideModal();
    if (openDialog === articleModal) hideArticleModal();
    if (openDialog === legalModal) hideLegalModal();
  }
  if (event.key === 'Tab') trapDialogFocus(event, openDialog);
});

prepareLanguageContent();
let savedLanguage = 'pt';
try { savedLanguage = localStorage.getItem('nexa360-language') || 'pt'; } catch (_) { /* keep Portuguese */ }
setLanguage(savedLanguage, false);
