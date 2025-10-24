import React from 'react';
import { Link } from 'react-router-dom';

import brainFoodImg from '../assets/images/brain-foods.jpg';
import visvesvarayaImg from '../assets/images/vishveshwaraya-template.jpg';
import nurserySchoolImg from '../assets/images/National-Education-Policy.png';
import antiBullyingImg from '../assets/images/walkathon-blog.jpg';
import oceanDayImg from '../assets/images/world_environment_day.jpg';
import youthDayImg from '../assets/images/Yellow-Bright-Business-Idea-Tutorial-Youtube-Thumbnail.png';
import newEducationPolicyImg from '../assets/images/dhoni-resized.jpg';
import republicDayImg from '../assets/images/ocean_day.jpg';
import nationalyouthdayIMG from '../assets/images/national-youth-day.jpg';

const blogPosts = [ 
  {
    image: brainFoodImg,
    title: "Nurturing Young Minds: The Secret Food For Kids' Brain Health",
    author: "NPS KUDLU",
    date: "JUNE 19, 2023",
    excerpt: "Welcome to the official blog of National Public School, Kudlu! As one of the best CBSE schools in Bangalore, we prioritize the overall development and well-being of our students...",
    link: "/blog/brain-health"
  },
  {
    image: visvesvarayaImg,
    title: "Sir M. Visvesvaraya: India’s Visionary Engineer And Architect Of Progress – NPS Kudlu",
    author: "NPS KUDLU",
    date: "JUNE 16, 2023",
    excerpt: "In the realm of education, National Public School Kudlu stands as an esteemed institution, nurturing young minds into future leaders...",
    link: "/blog/visvesvaraya"
  },
   {
    image: newEducationPolicyImg,
    title: "The New Education Policy: Focusing On 5 Pillars For A Better Future – NPS Kudlu",
    author: "NPS KUDLU",
    date: "JUNE 15, 2023",
    excerpt: "National Public School Kudlu is dedicated to providing its students with a high-quality education while upholding transparency and accountability...",
    link: "/blog/new-education-policy"
  },
  {
    image: republicDayImg,
    title: "NPS Kudlu’s Republic Day Celebrated In A Different Way",
    author: "NPS KUDLU",
    date: "JUNE 15, 2023",
    excerpt: "National Public School Kudlu, nestled in the heart of South Bangalore, embarked on an exhilarating journey of physical fitness and patriotism with its first-ever sports day event...",
    link: "/blog/republic-day"
  },
  {
    image: nurserySchoolImg,
    title: "Choosing The Right Nursery School: Tips From Education Experts",
    author: "NPS KUDLU",
    date: "JUNE 15, 2023",
    excerpt: "Are you a parent looking for the perfect nursery school for your child? With so many options available, it can be an overwhelming task to choose which one is the best fit...",
    link: "/blog/choosing-nursery"
  },
  {
    image: antiBullyingImg,
    title: "5 Ways To Prevent Bullying In Schools – NPS Kudlu",
    author: "NPS KUDLU",
    date: "JUNE 15, 2023",
    excerpt: "At the Best CBSE Schools in Bangalore – National Public School Kudlu, we are excited to open our doors to all students for an established & safe community built on safety, inclusivity, and respect...",
    link: "/blog/prevent-bullying"
  },
  {
    image: oceanDayImg,
    title: "Embracing The Mighty Blue: Celebrating World Ocean Day",
    author: "NPS KUDLU",
    date: "JUNE 14, 2023",
    excerpt: "Welcome to National Public School Kudlu. As we gather here on this special occasion of World Ocean Day, let us embark on a collaborative journey into the depths of the mighty blue that covers over 70% of our planet...",
    link: "/blog/world-ocean-day"
  },
  {
    image: youthDayImg,
    title: "Top 4 Things To Do On National Youth Day",
    author: "NPS KUDLU",
    date: "JANUARY 12, 2023",
    excerpt: "Find out how you can celebrate National Youth day in your community...",
    link: "/blog/national-youth-day"
  },
];

const BlogPage = () => {
  return (
    <div className="blog-page-container">
      <header className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <p>Blog</p>
        </div>
      </header>
      <div className="blog-content container">
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <div className="blog-card" key={index}>
              <Link to={post.link} className="blog-image-link">
                <img src={post.image} alt={post.title} />
              </Link>
              <div className="blog-card-content">
                <p className="blog-meta">BLOG / BY {post.author}</p>
                <h2 className="blog-title">
                  <Link to={post.link}>{post.title}</Link>
                </h2>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-footer">
                  <span className="blog-date">{post.date}</span>
                  <Link to={post.link} className="read-more">READ MORE</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;