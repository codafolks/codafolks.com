---
layout: ../../layouts/post-layout.astro
title: 'Implementing Authentication with Next.js without third-party libraries'
description: 'A simple guide to implement authentication in Next.js without third-party libraries'
author: 'Falconiere R. Barbosa'
date: '2021-09-26'
---
# Implementing Authentication with Next.js without third-party libraries

Next.js is a popular React framework that makes it easy to build server-rendered applications. It comes with built-in support for API routes, which makes it easy to create server-side logic for your application.

In this post, I will show you how to implement authentication in Next.js without using third-party libraries. We will use the Next.js API routes to create a simple authentication system.

## Prerequisites

Before we start, make sure you have the following installed:

- Node.js
- npm or yarn

## Setting up the project

First, create a new Next.js project:

```bash
npx create-next-app@latest my-auth-app
```

Next, create a new folder called `api` in the root of your project. This folder will contain the API routes.

```bash
mkdir api
```

Inside the `api` folder, create a new file called `login.js`. This file will handle the login logic.

```bash
touch api/login.js
```

## Creating the login route

Open the `login.js` file and add the following code:

 ```typescript
  export default function handler(req, res) {
    if (req.method === 'POST') {
      const { email, password } = req.body;

      if (email === '' || password === '') {
        res.status(400).json({ message: 'Email and password are required' });
      } else {
        res.status(200).json({ message: 'Login successful' });
      }
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
```