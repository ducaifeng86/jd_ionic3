import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content} from 'ionic-angular';
import { ConfigProvider } from '../../providers/config/config';
import { HttpServicesProvider } from '../../providers/http-services/http-services';
import { StorageProvider } from '../../providers/storage/storage';
/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-search',
	templateUrl: 'search.html',
})
export class SearchPage {
	@ViewChild(Content) content: Content;
	public flag = false; /*有没有关键词、关键词开关*/
	public keywords = ''; /*关键词*/
	public list = []; /*商品数据*/
	public page = 1; /*分页*/
	public hasData = true; /*是否有数据*/
	public historyList = []; /*历史记录的数据*/
	constructor(public navCtrl: NavController, public navParams: NavParams,public config:ConfigProvider,public httpService:HttpServicesProvider,public storage:StorageProvider) {
		 //获取历史记录
     this.getHistory();
	}
	ionViewDidLoad() {}
	getHistory() { //获取历史记录
		var history = this.storage.get('historyData');
		if(history) { /*如果历史记录存在 把历史记录给数据*/
			this.historyList = history;
		}
		console.log(history);
	}
	saveHistory() {
		var history = this.storage.get('historyData');
		if(history) { /*有*/
			// ['女装','手机','电脑','男装']
			if(history.indexOf(this.keywords) == -1) {
				history.push(this.keywords);
				//重新写入
				this.storage.set('historyData', history);
			}

		} else { /*以前没有*/
			this.historyList.push(this.keywords);
			// historyList： ['女装']
			//写入到localstorage
			this.storage.set('historyData', this.historyList);

		}
	}
	getSearchList(infiniteScroll) {
		if(!infiniteScroll) { /*点击搜索按钮*/
			this.page = 1;
			this.hasData = true;
			this.content.scrollToTop(0); /*回到顶部*/
			 //调用保存历史记录的方法
        	this.saveHistory();
		}
		let apiUrl = `api/plist?search=${this.keywords}&page=${this.page}`;
		this.httpService.requestData(apiUrl, (data) => {
			this.flag = true; /*显示商品列表*/
			if(this.page == 1) {
				this.list = data.result; /*拼接数据*/
			} else {
				this.list = this.list.concat(data.result); /*拼接数据*/
			}
			console.log(apiUrl);
			console.log(data.result);
			if(infiniteScroll) {
				//告诉ionic 请求数据完成
				infiniteScroll.complete();
				/*没有数据停止上拉更新*/
				if(data.result < 10) {
					this.hasData = false;
				}
			}
			this.page++;
		});
	}
	//加载更多
	doLoadMore(infiniteScroll) {
		this.getSearchList(infiniteScroll)
	}

}