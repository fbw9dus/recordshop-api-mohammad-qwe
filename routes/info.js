var express = require('express')
var router = express.Router()
const { DataStore } = require('notarealdb');

const store = new DataStore('./data');
const records = store.collection('records')
router.get('/records',(req,res)=>{
    res.json(records.list())
    })
    router.post('/records',(req,res)=>{
        let data = req.body
        records.create(data)
        console.log(data)
        // records.delete('id')
        res.json(records.list())
        
        
    })



    module.exports = router

