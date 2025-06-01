# 📝 Contributing to the Blog

We welcome contributions from everyone! If you'd like to write a post for this blog, follow the process below. The contribution workflow is similar to contributing to an open-source project — just submit a **Pull Request (PR)** with your article in Markdown format.

---

## 🛠️ How to Contribute

### 1. **Clone Your Fork Locally**
```bash
git clone git@github.com:chaudharykiran/devlog.git
cd devlog
```

### 2. **Create a New Branch**
Use a descriptive branch name for your contribution:
```bash
git checkout -b add-my-awesome-post
```

### 3. **Write Your Blog Post**
- Store your post in the `posts/` directory.
- Use the `.md` (Markdown) file extension.
- Follow the naming convention: `YYYY-MM-DD-title-of-your-post.md`

#### ✍️ Markdown File Structure

Each post should include **frontmatter metadata** at the top of the file:

```markdown
---
title: "Your Post Title"
author: "Your Name"
date: "2025-05-25"
description: "A short summary of your post for SEO and previews"
tags: ["javascript", "web-development"]
---

This is the body of your blog post written in Markdown.

You can use headings, lists, links, images, and code blocks:

## Subheading

Here’s a list:

- Item one
- Item two

And here’s a code block:

```js
console.log("Hello World");
```

> 💡 Tip: Make sure your post has clear value, good grammar, and follows the tone of the blog.

### 4. **Preview Your Changes**
Run the development server locally to preview your post:

```bash
yarn dev
```

Visit `http://localhost:5173/posts/your-post-slug` to see your post rendered.

### 5. **Commit and Push Your Changes**
```bash
git add .
git commit -m "<commit message>"
git push origin "<branch name>"
```

### 6. **Open a Pull Request**
Go to the original blog repository on GitHub and open a **new Pull Request** from your branch.

Include:
- A clear title
- A brief description of what your post covers
- Any notes for the maintainer (optional)

### 7. **Review & Merge**
The maintainers will review your PR. You may be asked to make changes based on feedback. Once approved, your post will be merged and published live!

---

## 🧪 Contribution Guidelines

To help streamline the review process, please follow these guidelines:

- Write in **clear, conversational English** (or agreed language).
- Avoid overly technical jargon unless necessary.
- Include relevant **tags** so readers can discover your post easily.
- Add **images** where appropriate (include image files in `/public/images/`).
- Ensure all links are working and properly formatted.

---

## 🙌 Thank You!

Thank you for contributing to the blog! Your knowledge and effort help build a better resource for everyone.

---

Let me know if you'd like to generate a **template for a blog post**, a **GitHub issue template for contributions**, or a **landing page explaining how to contribute**.
