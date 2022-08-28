import React from 'react';
import HomeView from '../src/views/home/Home.view';
import {render, fireEvent, screen} from '@testing-library/react-native';
const genres = require('../assets/data/genres.json');

describe('testing HomeView', () => {
  test('view has not changed', () => {
    const viewJSON = render(
      <HomeView genres={genres} name={'John'} onGenrePress={() => {}} />,
    );
    expect(viewJSON).toMatchSnapshot();
  });

  test('all list items exist', () => {
    render(<HomeView genres={genres} name={'John'} onGenrePress={() => {}} />);
    expect(screen.getByText('Action')).toBeTruthy();
    expect(screen.getByText('Adventure')).toBeTruthy();
    expect(screen.getByText('Animation')).toBeTruthy();
  });
  test('all list items are clickable', () => {
    const mockFn = jest.fn();
    render(<HomeView genres={genres} name={'John'} onGenrePress={mockFn} />);
    fireEvent.press(screen.getByText('Action'));
    fireEvent.press(screen.getByText('Adventure'));
    fireEvent.press(screen.getByText('Animation'));
    expect(mockFn).toBeCalledTimes(3);
  });
  test('click returns valid value', () => {
    const mockFn = jest.fn();
    render(<HomeView genres={genres} name={'John'} onGenrePress={mockFn} />);
    fireEvent.press(screen.getByText('Action'));
    expect(mockFn).toBeCalledWith(genres[0]);
  });
});
