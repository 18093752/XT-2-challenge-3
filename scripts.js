function togglefold(){
	var body = document.getElementsByTagName("body")[0]
	if(body.className == "foldout"){
		body.className = ""
	}
	else{
		body.className += "foldout"
	}
}