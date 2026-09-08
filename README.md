# SMM Panel Landing Page

A modern and responsive **Social Media Marketing (SMM) Panel landing
page** built from a Figma design using **React.js, Vite, and Tailwind
CSS**.

The project follows a component-based architecture with reusable UI
components and separate data files to keep the code clean, scalable, and
easy to maintain.

## ✨ Features

- Responsive design for mobile, tablet, and desktop
- Figma-based UI implementation
- Reusable React components
- Responsive navigation bar with mobile menu
- Hero section with CTA
- Statistics section
- Social media services section
- Dynamic service content
- Social media growth section
- How It Works section
- Multiple payment methods
- Advantages / Why Choose Us section
- CTA banner
- FAQ accordion
- Responsive footer
- Data-driven rendering using JavaScript arrays
- Smooth section navigation

## 🛠️ Tech Stack

- **React.js**
- **Vite**
- **JavaScript (ES6+)**
- **Tailwind CSS**
- **HTML5**
- **CSS3**
- **Git & GitHub**

## 📁 Project Structure

```text
src/
│
├── assets/
│   └── images/
│       ├── advantages/
│       │   ├── bot.png
│       │   ├── growth.png
│       │   ├── lock.png
│       │   └── trophy.png
│       ├── cta/
│       │   └── girl.png
│       ├── hero/
│       │   └── New Hero img.png
│       ├── payment/
│       │   └── payment.png
│       ├── services/
│       │   ├── facebook.png
│       │   └── Frame.png
│       └── stats/
│           ├── order.png
│           ├── rank.png
│           ├── service.png
│           └── user.png
│
├── component/
│   ├── common/
│   │   ├── Button.jsx
│   │   ├── Container.jsx
│   │   └── SectionTitle.jsx
│   ├── home/
│   │   ├── Advantages.jsx
│   │   ├── CtaBanner.jsx
│   │   ├── Faq.jsx
│   │   ├── Hero.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── PaymentMethods.jsx
│   │   ├── Services.jsx
│   │   ├── SocialGrowth.jsx
│   │   └── Stats.jsx
│   └── layout/
│       ├── Footer.jsx
│       └── Navbar.jsx
│
├── data/
│   ├── advantagesData.js
│   ├── ctaData.js
│   ├── faqData.js
│   ├── footer.js
│   ├── hero.js
│   ├── navigation.js
│   ├── services.js
│   ├── stats.js
│   └── steps.js
│
├── pages/
│   └── Home.jsx
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

## 🧩 Page Structure

```text
Navbar
   ↓
Hero
   ↓
Stats
   ↓
Services
   ↓
Social Growth
   ↓
How It Works
   ↓
Payment Methods
   ↓
Advantages
   ↓
CTA Banner
   ↓
FAQ
   ↓
Footer
```

`Home.jsx` is responsible for composing the main landing-page sections.

## ⚙️ Requirements

Make sure the following are installed:

- Node.js 18+
- npm
- Git

Check your versions:

```bash
node -v
npm -v
git --version
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

### 2. Navigate to the project

```bash
cd <PROJECT_FOLDER_NAME>
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Vite will display a local development URL, usually:

```text
http://localhost:5173
```

Open the URL in your browser.

## 🏗️ Production Build

Create an optimized production build:

```bash
npm run build
```

The production-ready files will be generated in:

```text
dist/
```

Preview the production build locally:

```bash
npm run preview
```

## 🎨 Styling

The project uses **Tailwind CSS** for UI styling, including:

- Layout and positioning
- Responsive breakpoints
- Typography
- Colors
- Spacing
- Borders and radius
- Shadows
- Hover effects
- Transitions

Example:

```jsx
<div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">Content</div>
```

## 📱 Responsive Design

The website is designed for:

- Mobile devices
- Tablets
- Laptops
- Desktop screens

Tailwind responsive breakpoints are used throughout the project:

```text
sm  → Small screens
md  → Medium screens
lg  → Large screens
xl  → Extra large screens
```

## 🧱 Component Architecture

The project separates reusable UI elements from page-specific sections.

### Common Components

Located in `src/component/common/`:

- `Button.jsx`
- `Container.jsx`
- `SectionTitle.jsx`

### Layout Components

Located in `src/component/layout/`:

- `Navbar.jsx`
- `Footer.jsx`

### Home Components

Located in `src/component/home/`.

Each major landing-page section has its own component, keeping
`Home.jsx` clean and maintainable.

## 📊 Data-Driven Components

Static content is separated from UI components and stored inside:

```text
src/data/
```

Examples:

```text
services.js
stats.js
advantagesData.js
faqData.js
steps.js
```

## 🖼️ Assets

Project images are organized under:

```text
src/assets/images/
```

Assets are grouped by section:

```text
advantages/
cta/
hero/
payment/
services/
stats/








## 🔮 Future Improvements

Potential future features:

-   User authentication
-   SMM service API integration
-   User dashboard
-   Order management
-   Payment gateway integration
-   Service search and filtering
-   Backend integration
-   Admin dashboard
-   User profile management
-   Blog functionality
-   Dark mode

## 👩‍💻 Author

**Nusrat Tabassum**

Frontend Developer
```
