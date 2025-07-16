import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import { ThemeProvider } from './components/ThemeContext';
import TaskManager from './components/TaskManager';
import ApiList from './components/ApiList';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/tasks" replace />} />
            <Route path="/tasks" element={<TaskManager />} />
            <Route path="/api" element={<ApiList />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;