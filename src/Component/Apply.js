import React from "react";
import  { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

// import {  useNavigate } from "react-router-dom";

const Apply = () => {

    // const navigate = useNavigate();







const CourseForm = () => {
  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    category: '',
    instructor: '',
    duration: '',
    image: null,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setCourseData({ ...courseData, image: files[0] });
    } else {
      setCourseData({ ...courseData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Course Submitted:', courseData);
    setSubmitted(true);
    setCourseData({
      title: '',
      description: '',
      category: '',
      instructor: '',
      duration: '',
      image: null,
    });
    e.target.reset();
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4  text-primary">Apply for New Course</h2>

      {submitted && <Alert variant="success">Course added successfully!</Alert>}

      <Form onSubmit={handleSubmit} className="shadow p-4 bg-light rounded">
        <Form.Group className="mb-3">
          <Form.Label>Course Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Enter course title"
            value={courseData.title}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="description"
            placeholder="Course description"
            value={courseData.description}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Select name="category" value={courseData.category} onChange={handleChange} required>
            <option value="">Select Category</option>
            <option value="Technology">Technology</option>
            <option value="Business">Business</option>
            <option value="Design">Design</option>
            <option value="Education">Education</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Instructor</Form.Label>
          <Form.Select name="instructor" value={courseData.instructor} onChange={handleChange} required>
            <option value=""></option>
            <option value="business-instructor">Business Instructor</option>
            <option value="technology-instructor">Technology Instructor</option>
            <option value="design-instructor">Design Instructor</option>
            <option value="education-instructor">Education Instructor</option>
          </Form.Select>
          <Form.Control
            type="text"
            name="instructor"
            placeholder="Instructor name"
            value={courseData.instructor}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Duration (e.g. 4 weeks)</Form.Label>
          <Form.Control
            type="text"
            name="duration"
            placeholder="e.g. 6 weeks, 3 months"
            value={courseData.duration}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Course Image</Form.Label>
          <Form.Control type="file" name="image" accept="image/*" onChange={handleChange} />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Add Course
        </Button>
      </Form>
    </div>
  );

}

  return (
    <div>
      <CourseForm />
    </div>
  );
}

export default Apply;
