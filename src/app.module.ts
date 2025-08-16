import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { BuyersModule } from './buyers/buyers.module';
import { SellersModule } from './sellers/sellers.module';
import { StoresModule } from './stores/stores.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { CartsModule } from './carts/carts.module';
import { ReviewsModule } from './reviews/reviews.module';
import { NotificationsModule } from './notifications/notifications.module';
import { ChatsModule } from './chats/chats.module';
import { MessagesModule } from './messages/messages.module';
import { PostsModule } from './posts/posts.module';
import { LocationsModule } from './locations/locations.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { ReportsModule } from './reports/reports.module';
import { PushtokensModule } from './pushtokens/pushtokens.module';
import { FollowedstoresModule } from './followedstores/followedstores.module';
import { LikedpostsModule } from './likedposts/likedposts.module';
import { VerificationrequestsModule } from './verificationrequests/verificationrequests.module';
import appConfig from './config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig],
      envFilePath: ['.env'],
    }),
    UsersModule,
    BuyersModule,
    SellersModule,
    StoresModule,
    ProductsModule,
    OrdersModule,
    CartsModule,
    ReviewsModule,
    NotificationsModule,
    ChatsModule,
    MessagesModule,
    PostsModule,
    LocationsModule,
    AnalyticsModule,
    ReportsModule,
    PushtokensModule,
    FollowedstoresModule,
    LikedpostsModule,
    VerificationrequestsModule,
  ],
})
export class AppModule {}
