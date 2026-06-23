import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import GlowCard from './GlowCard';
import './Projects.css';

const projects = [
  {
    title: 'RAG AI Conversation System',
    subtitle: 'FAISS + Sentence Transformers',
    description:
      'Institutional knowledge retrieval chatbot using Retrieval-Augmented Generation. Combines FAISS vector search with Sentence Transformers for semantic similarity, served by locally-hosted LLMs.',
    tags: ['AI', 'NLP', 'RAG', 'FAISS', 'PHP', 'Python'],
    github: 'https://github.com/Brair-Mpagi/RAG-AI-conversation-system-FAISS-ST',
    featured: true,
    stars: 2,
    category: 'ai',
    codePreview: `# RAG Pipeline Core
from sentence_transformers import SentenceTransformer
import faiss

model = SentenceTransformer('all-MiniLM-L6-v2')
index = faiss.IndexFlatL2(384)

def retrieve(query, k=5):
    embedding = model.encode([query])
    _, indices = index.search(embedding, k)
    return [documents[i] for i in indices[0]]`,
  },
  {
    title: 'AI-Powered Sales System',
    subtitle: 'ML-Driven Lead Scoring',
    description:
      'Intelligent sales automation leveraging machine learning for predictive lead scoring, revenue forecasting, and personalised outreach workflows.',
    tags: ['Machine Learning', 'JavaScript', 'Predictive Analytics'],
    github: 'https://github.com/Brair-Mpagi/AI-Powered-Sales-System',
    featured: true,
    category: 'ai',
    codePreview: `// Predictive Lead Scoring Engine
const scoreLeads = async (leads) => {
  const features = extractFeatures(leads);
  const predictions = await model.predict(features);
  
  return leads.map((lead, i) => ({
    ...lead,
    score: predictions[i],
    tier: predictions[i] > 0.8 ? 'HOT' : 'WARM'
  }));
};`,
  },
  {
    title: 'Predictive Optimization',
    subtitle: 'Linear Programming + ML',
    description:
      'Optimisation model combining Linear Programming with ML approaches for resource allocation and constraint-based decision making.',
    tags: ['Python', 'scikit-learn', 'LP', 'Optimization'],
    github: 'https://github.com/Brair-Mpagi/predictive-optimization-ML',
    featured: true,
    category: 'ai',
    codePreview: `# LP + ML Hybrid Optimization
from scipy.optimize import linprog
from sklearn.ensemble import RandomForestRegressor
 
def optimize(constraints, features):
    model = RandomForestRegressor()
    model.fit(X_train, y_train)
    
    predictions = model.predict(features)
    result = linprog(c=-predictions,
                     A_ub=constraints)
    return result.x`,
  },
  {
    title: 'Model Optimization',
    subtitle: 'Linear & Logistic Regression',
    description:
      'ML models built, tuned, and evaluated with scikit-learn — regression analysis, hyperparameter tuning, and performance evaluation.',
    tags: ['Python', 'scikit-learn', 'ML', 'Regression'],
    github: 'https://github.com/Brair-Mpagi/model-_optimization',
    category: 'ai',
    codePreview: `# Model Evaluation Pipeline
from sklearn.model_selection import GridSearchCV
 
param_grid = {
  'C': [0.1, 1, 10],
  'penalty': ['l1', 'l2']
}

grid = GridSearchCV(
  LogisticRegression(),
  param_grid, cv=5, scoring='f1'
)
grid.fit(X_train, y_train)
print(f"Best: {grid.best_score_:.3f}")`,
  },
  {
    title: 'Multi-Language Dev Vault',
    subtitle: 'C++ · C · Python · Web',
    description:
      'Foundational development projects spanning multiple languages and paradigms — systems programming, data science, and web.',
    tags: ['C++', 'C', 'Python', 'HTML/CSS/JS'],
    github: 'https://github.com/Brair-Mpagi/Dummy-source-code-vault',
    category: 'web',
    codePreview: `// Binary Search Tree — C++
template <typename T>
struct Node {
  T data;
  Node* left = nullptr;
  Node* right = nullptr;
};

template <typename T>
void insert(Node<T>*& root, T val) {
  if (!root) root = new Node<T>{val};
  else if (val < root->data)
    insert(root->left, val);
  else insert(root->right, val);
}`,
  },
  {
    title: 'RAG-AI-conversation-system-FAISS-ST',
    subtitle: 'NLP Research Project',
    description:
      'Final-year thesis: NLP-driven conversational AI for automated institutional knowledge retrieval in African higher education.',
    tags: ['NLP', 'Python', 'AI', 'Research'],
    github: 'https://github.com/Brair-Mpagi/RAG-AI-conversation-system-FAISS-ST',
    category: 'research',
    codePreview: `# NLP Knowledge Extraction
import spacy
nlp = spacy.load("en_core_web_lg")

def extract_entities(query):
    doc = nlp(query)
    entities = [(ent.text, ent.label_)
                for ent in doc.ents]
    intent = classify_intent(doc)
    return {
        "entities": entities,
        "intent": intent,
        "confidence": doc.cats
    }`,
  },
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="reveal" ref={headerRef}>
          <span className="section-label">// Projects</span>
          <h2 className="section-title">What I've Built</h2>
          <p className="section-subtitle">
            Real, working systems not tutorials. Each project solves a genuine problem with deployed code.
          </p>
        </div>

        <div className="projects__grid reveal reveal-stagger" ref={gridRef}>
          {projects.map((project, i) => (
            <GlowCard
              key={i}
              className={`project-card ${project.featured ? 'project-card--featured' : ''}`}
              onMouseEnter={() => setHoveredProject(i)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="project-card__inner">
                {/* Code Preview */}
                <div className="project-card__code-preview">
                  <div className="project-card__code-header">
                    <span className="project-card__code-dot project-card__code-dot--red"></span>
                    <span className="project-card__code-dot project-card__code-dot--yellow"></span>
                    <span className="project-card__code-dot project-card__code-dot--green"></span>
                    <span className="project-card__code-filename">{project.title.toLowerCase().replace(/\s+/g, '_')}.py</span>
                  </div>
                  <pre className="project-card__code-body">
                    <code>{project.codePreview}</code>
                  </pre>
                </div>

                {/* Card Content */}
                <div className="project-card__content">
                  <div className="project-card__header">
                    <div className="project-card__icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
                    </div>
                    <div className="project-card__links">
                      {project.stars && (
                        <span className="project-card__stars">⭐ {project.stars}</span>
                      )}
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-card__link" aria-label="GitHub">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                      </a>
                    </div>
                  </div>
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__subtitle">{project.subtitle}</p>
                  <p className="project-card__description">{project.description}</p>
                  <div className="project-card__tags">
                    {project.tags.map((tag, j) => (
                      <span className="project-card__tag" key={j}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
