import { App } from '@/app';
import { AuthRoute } from '@routes/auth.route';
import { UserRoute } from '@routes/users.route';
import { ValidateEnv } from '@utils/validateEnv';
import { MocKPIRoute } from './routes/mocKPI.routes';

ValidateEnv();

const app = new App([new AuthRoute(), new UserRoute(), new MocKPIRoute()]);

app.listen();
