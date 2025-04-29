import React from 'react';

const codingPlatforms = [
  {
    name: 'LeetCode',
    url: 'https://leetcode.com',
    description: 'Offers a wide range of coding problems to improve algorithmic skills and prepare for technical interviews.'
  },
  {
    name: 'HackerRank',
    url: 'https://www.hackerrank.com',
    description: 'Provides coding challenges and contests in various domains to enhance problem-solving skills and prepare for interviews.'
  },
  {
    name: 'Codeforces',
    url: 'https://codeforces.com',
    description: 'Features competitive programming contests and a vast collection of problems for practice and improvement.'
  },
  {
    name: 'CodeChef',
    url: 'https://www.codechef.com',
    description: 'Hosts monthly coding contests and provides a large problem set for practicing and improving algorithmic skills.'
  },
  {
    name: 'AtCoder',
    url: 'https://atcoder.jp',
    description: 'Offers competitive programming contests and a variety of problems to practice and enhance coding skills.'
  },
  {
    name: 'TopCoder',
    url: 'https://www.topcoder.com',
    description: 'Provides algorithmic challenges and competitions, known for its TopCoder Open (TCO) and Single Round Matches (SRMs).'
  },
  {
    name: 'Project Euler',
    url: 'https://projecteuler.net',
    description: 'Focuses on mathematical problems and puzzles that require programming to solve, helping to develop problem-solving skills.'
  },
  {
    name: 'SPOJ',
    url: 'https://www.spoj.com',
    description: 'Offers a vast collection of programming problems and online judges to practice and improve coding skills.'
  },
  {
    name: 'CS Academy',
    url: 'https://csacademy.com',
    description: 'Features competitive programming contests and a variety of problems for practice and skill enhancement.'
  },
  {
    name: 'Kaggle',
    url: 'https://www.kaggle.com',
    description: 'Provides data science competitions and datasets for practicing data analysis and machine learning skills.'
  }
];

const CodingPlatforms = () => {
  return (
    <div className="mt-5 p-4 bg-light">
      <h1 className="text-center mb-4">Top 10 Coding Platforms</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {codingPlatforms.map(platform => (
          <div key={platform.name} className="p-3 m-2 bg-white shadow rounded border" style={{ width: '300px' }}>
            <h3 className="bg-primary text-white p-3 rounded-top">
              <a href={platform.url} target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">
                {platform.name}
              </a>
            </h3>
            <p className="p-3">{platform.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodingPlatforms;
