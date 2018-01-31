var photos=[];

photos.push({
	name:"洋葱模型",
	path:"http://otolt04ih.bkt.clouddn.com/18-1-16/19742736.jpg"
});

photos.push({
	name:"思维导图",
	path:"http://otolt04ih.bkt.clouddn.com/18-1-8/53717705.jpg"
});

photos.push({
	name:"这是什么鬼",
	path:"http://otolt04ih.bkt.clouddn.com/17-8-21/95226000.jpg"
});

exports.list=function(req,res){
	res.render("photos",{
		title:"Photos",
		photos:photos
	})
}

