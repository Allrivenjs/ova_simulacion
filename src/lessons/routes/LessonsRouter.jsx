import { Route, Routes } from 'react-router-dom';
import { LessonPage } from '../page';
import { LessonsLayout } from '../layout';

export const LessonsRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<LessonsLayout />}>
        <Route path='/:index/:id' element={<LessonPage />} />
      </Route>
    </Routes>
  );
};
