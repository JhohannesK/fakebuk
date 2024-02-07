import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VideoComponent } from './video/video.component';
import { GamesComponent } from './games/games.component';
import { GroupsComponent } from './groups/groups.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';

export const routes: Routes = [
	{
		path: '',
		component:HomeComponent,
		data: { title: 'Fakebuk | Home' }
	},
	{
		path: 'watch',
		component: VideoComponent,
		data: { title: 'Fakebuk | Watch' }
	},
	{
		path: 'marketplace',
		component: MarketplaceComponent,
		data: { title: 'Fakebuk | Watch' }
	},
	{
		path: 'groups/feed',
		component: GroupsComponent,
		data: { title: 'Fakebuk | Watch' }
	},
	{
		path: 'gaming/play',
		component: GamesComponent,
		data: { title: 'Fakebuk | Watch' }
	}

];
