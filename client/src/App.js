import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'

import Home from './Components/routes/Home'
import Subjects from './Components/routes/ItemRoutes/Items'
import Subject from './Components/routes/ItemRoutes/Item'
import SubjectEdit from './Components/routes/ItemRoutes/ItemEdit'
import SubjectCreate from './Components/routes/ItemRoutes/ItemCreate'

const subject = 'item';

const App = props => (
  <>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path={`/${subject}s/:id/edit`} component={SubjectEdit} />
      <Route path={`/${subject}s/:id`} component={Subject} />
      <Route path={`/${subject}s`} component={Subjects} />
      <Route path={`/create - ${subject}`} component={SubjectCreate} />
    </Switch>
  </>
)

export default withRouter(App)
