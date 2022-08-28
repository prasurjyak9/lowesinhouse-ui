import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import EditableCanvas from './components/Editor/Editor';


test('test scenario 1', () => {
  render(<EditableCanvas />)
  const element = screen.getByText("Export");
  expect(element).toBeInTheDocument();
});

test('test scenario 2', () => {
  render(<EditableCanvas />)
  const element = screen.getByText("Add Text");
  expect(element).toBeInTheDocument();
});

test('test scenario 3', () => {
  render(<EditableCanvas />)
  const element = screen.getByText("Add Image With Url");
  expect(element).toBeInTheDocument();
});

test('test scenario 4', () => {
  render(<EditableCanvas />)
  const btn = screen.getByText('Add Text')
  console.log("btn =", btn)
  fireEvent.click(btn)
  
});