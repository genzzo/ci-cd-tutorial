# CI/CD Tutorial with GitHub Actions

A hands-on tutorial project for learning Continuous Integration and Continuous Deployment by implementing a GitHub Actions workflow from scratch.

## 🎯 Purpose

This repository is a **teaching project** where students learn CI/CD by:

- Writing their own GitHub Actions workflow file
- Setting up automated testing and code quality checks
- Creating and managing build artifacts
- Implementing automatic deployment to GitHub Pages

## 📋 Requirements

- **Node.js** 20 or higher
- **npm** (comes with Node.js)
- **Git**
- **GitHub account** with access to create repositories and enable GitHub Actions

## 🚀 Setup Instructions

### 1. Fork and Clone the Repository

```bash
# Fork the repository on GitHub first, then:
git clone https://github.com/YOUR-USERNAME/ci-cd-tutorial.git
cd ci-cd-tutorial
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Verify Everything Works Locally

```bash
# Run tests
npm test

# Run linter
npm run lint

# Check code formatting
npm run format:check

# Build the project
npm run build
```

### 4. Your Assignment: Create the CI/CD Workflow

Create a `.github/workflows/ci-cd.yml` file that:

#### **CI Requirements:**

- Triggers on push to `main` and pull requests
- Runs on `ubuntu-latest`
- Installs dependencies with `npm ci`
- Runs the linter: `npm run lint`
- Checks formatting: `npm run format:check`
- Runs tests: `npm test`
- Builds the project: `npm run build`
- Generates a simple log file (e.g., with timestamp)
- Uploads two artifacts:
  - Build logs
  - The demo site (from `public/` directory)

#### **CD Requirements:**

- Only runs after CI succeeds
- Only deploys on push to `main` (not on PRs)
- Deploys the demo site to GitHub Pages

### 5. Enable GitHub Pages

1. Go to your repository **Settings**
2. Navigate to **Pages** (in the left sidebar)
3. Under **Source**, select **GitHub Actions**
4. Push your workflow file to trigger the first deployment.

### 6. Test Your Pipeline

1. Create a new branch: `git checkout -b test-ci`
2. Make a small change (e.g., update README)
3. Push and create a Pull Request
4. Verify CI runs successfully
5. Merge the PR and verify deployment happens

### 7. Configure Branch Protection (Optional Challenge)

1. Go to **Settings** → **Branches**
2. Add a rule for the `main` branch
3. Enable **Require status checks to pass before merging**
4. Select the **ci** check
5. Try creating a PR that fails tests to see protection in action

## 📦 What's Included

### Project Structure

```
ci-cd-tutorial/
├── .github/
│   └── workflows/
│       └── ci-cd.yml # Your workflow file to create
├── src/
│   └── sum.js                   # Simple sum function to test
├── test/
│   └── sum.test.js              # Tests for sum function
├── demo/
│   └── index.html               # Interactive demo page for deployment
├── eslint.config.js             # ESLint configuration
└── package.json                 # Project dependencies and scripts
```

## 🎓 Learning Objectives

By completing this tutorial, you'll learn:

1. **GitHub Actions Syntax**: YAML workflow configuration, jobs, steps, and actions
2. **Automated Testing**: Run tests on every code change
3. **Code Quality Gates**: Implement linting and formatting checks
4. **Build Artifacts**: Create and store build outputs and logs
5. **Deployment Automation**: Auto-deploy successful builds to production
6. **Branch Protection**: Enforce CI checks before merging
7. **Environment Separation**: Different behaviors for branches (CI everywhere, CD only on main)
8. **Job Dependencies**: Chain CI and CD jobs together

### Key Concepts

- **Workflow Triggers**: Events that start your pipeline (push, pull_request)
- **Jobs**: Units of work that run in parallel or sequence
- **Steps**: Individual commands within a job
- **Artifacts**: Files preserved after workflow completion
- **Conditional Execution**: Run steps only when certain conditions are met

### Expected Behavior

Once implemented:

- **Push to `main`**: Runs CI + CD (deploys to GitHub Pages)
- **Pull Requests to `main`**: Runs CI only (no deployment)
- **Artifacts**: Available for download after each run

### Viewing Artifacts

After your workflow runs:

1. Go to **Actions** tab → Select a workflow run
2. Scroll to **Artifacts** section at the bottom
3. Download `build-logs` or `demo-site` to inspect outputs

## 🧪 Running Tests

```bash
# Run all tests
npm test

# Tests include:
# - Basic addition
# - Type validation
# - Error handling
```

## 🔧 Available Scripts

| Command                | Description                         |
| ---------------------- | ----------------------------------- |
| `npm test`             | Run tests using Node.js test runner |
| `npm run lint`         | Check code quality with ESLint      |
| `npm run lint:fix`     | Auto-fix linting issues             |
| `npm run format`       | Format code with Prettier           |
| `npm run format:check` | Check if code is formatted          |
| `npm run build`        | Build the project to `dist/`        |

## 🌐 Live Demo

Once deployed, the demo site shows:

- Interactive calculator using the sum function
- Beautiful UI demonstrating the deployed application
- Real-world example of CD in action

## � Hints & Tips

<details>
<summary>Click for GitHub Actions Workflow Hints</summary>

### Basic Workflow Structure

```yaml
name: Your Workflow Name

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  job-name:
    runs-on: ubuntu-latest
    steps:
      - name: Step description
        run: command to execute
```

### Useful Actions

- `actions/checkout@v6` - Check out your code
- `actions/setup-node@v6` - Set up Node.js environment
- `actions/upload-artifact@v6` - Upload build artifacts
- `actions/download-artifact@v7` - Download artifacts from previous job
- `actions/upload-pages-artifact@v3` - Upload to Pages
- `actions/deploy-pages@v4` - Deploy to Pages

### Creating Log Files

```bash
mkdir -p logs
echo "Build completed at $(date)" > logs/build.log
```

### Conditional Job Execution

```yaml
if: github.event_name == 'push' && github.ref == 'refs/heads/main'
```

</details>

## 🤝 For Instructors

This repository includes a reference implementation at `.github/workflows/ci-cd.yml` for testing purposes. Students should create their own workflow from scratch. Consider:

- Having students work in pairs to discuss workflow design
- Asking them to intentionally break tests to see CI failures
- Discussing artifact retention policies and costs
- Exploring more advanced topics like matrix builds, caching, or secrets management

## 📄 License

This project is open source and available for educational purposes.

## 🔗 Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
