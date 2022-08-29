import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import EditableCanvas from './components/Editor/Editor';
import {create} from 'react-test-renderer'
import NewsLetter from './components/Newsletter/Newsletter';
import CommentsSection from './components/CommentsSection/CommentsSection';
import ReaderFeed from './components/ReaderFeed/ReaderFeed';


// test('test scenario 1', () => {
//   render(<EditableCanvas />)
//   const element = screen.getByText("Export");
//   expect(element).toBeInTheDocument();
// });

// test('test scenario 2', () => {
//   render(<EditableCanvas />)
//   const element = screen.getByText("Add Text");
//   expect(element).toBeInTheDocument();
// });

// test('test scenario 3', () => {
//   render(<EditableCanvas />)
//   const element = screen.getByText("Add Image With Url");
//   expect(element).toBeInTheDocument();
// });

// test('test scenario 4', () => {
//   render(<EditableCanvas />)
//   const btn = screen.getByText('Add Text')
//   console.log("btn =", btn)
//   fireEvent.click(btn)
  
// });

// test('test scenario 5', () => {
//   render(<EditableCanvas />)
//   const btn = screen.getByText('Add Text')
//   console.log("btn =", btn)
//   fireEvent.click(btn)
  
// });

test('test scenario 6', () => {
  let tree = create(<EditableCanvas />)
  expect(tree.toJSON()).toMatchSnapshot();
})

test('test scenario 7', () => {
  let tree = create(<NewsLetter />)
  expect(tree.toJSON()).toMatchSnapshot();
})

test('test scenario 8', () => {
  let tree = create(<CommentsSection />)
  expect(tree.toJSON()).toMatchSnapshot();
})

test('test scenario 9', () => {
  let tree = create(<ReaderFeed />)
  expect(tree.toJSON()).toMatchSnapshot();
})

// test('test scenario 10', () => {
//   render(<CommentsSection />)
//   const element = screen.getByText("Add Comment");
//   expect(element).toBeInTheDocument();
// });

// test('test scenario 11', () => {
//   render(<CommentsSection />)
//   const inputFields = screen.getAllByRole("textbox")
//   fireEvent.change(inputFields[0], { target: { value: 4 } })

//   const element = screen.getByRole('button')
//   fireEvent.click(element)

//   const comments = screen.getAllByRole("paragraph")
//   expect(comments[3]).toHaveValue("4")
// })