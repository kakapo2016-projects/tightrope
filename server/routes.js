export default function (app) => {

    app.get('/login', function(req, res){
        res.render('login', {
            title: 'Express Login'
        })
    })

    //other routes..
}
