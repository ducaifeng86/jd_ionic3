import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ConfigProvider } from '../../providers/config/config';
import { HttpServicesProvider } from '../../providers/http-services/http-services';

/**
 * Generated class for the ProductlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-productlist',
	templateUrl: 'productlist.html',
})
export class ProductlistPage {
	public cid = ''; //分类id
	public page = 1; //分页
	public list = []; //商品数据
	constructor(public navCtrl: NavController, public config: ConfigProvider, public navParams: NavParams, public httpService: HttpServicesProvider) {
		this.cid = this.navParams.get('cid'); //获取参数
		this.getProductList('');
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad ProductlistPage');
	}
	getProductList(infiniteScroll){
		let apiUrl = `api/plist?cid=${this.cid}&page=${this.page}`;
		this.httpService.requestData(apiUrl,(data)=>{
			this.list = this.list.concat(data.result);
			if(infiniteScroll){
				infiniteScroll.complete();
				if(data.result.length < 10){
					infiniteScroll.enable(false);
				}
			}
			this.page++;
		})
	}
}