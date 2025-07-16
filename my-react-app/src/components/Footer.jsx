import React from 'react';

const Footer = () => (
  <footer className="bg-white dark:bg-gray-900 shadow mt-8">
    <div className="max-w-7xl mx-auto py-4 px-4 text-center text-gray-500 dark:text-gray-400">
      &copy; {new Date().getFullYear()} PLP Task Manager. All rights reserved. |
      <a href="https://github.com/" className="ml-2 underline hover:text-blue-600">GitHub</a>
    </div>
  </footer>
);

export default Footer; 