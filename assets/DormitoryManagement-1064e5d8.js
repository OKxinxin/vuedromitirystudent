import{l as e}from"./index-f8789b21.js";const o=()=>e.request({url:"api/school/all",method:"get"}),d=()=>e.request({url:"api/building/all",method:"get"}),s=t=>e.request({url:"api/dormitory/add",method:"post",data:t}),u=()=>e.request({url:"api/dormitory/all",method:"get"}),l=t=>e.request({url:"api/dormitory/edit",method:"post",data:t}),i=t=>e.request({url:"api/dormitory/delete",params:t}),a=()=>e.request({url:"api/student/all",method:"get"}),n=t=>e.request({url:"api/dormitory-student/add",method:"post",data:t}),m=()=>e.request({url:"api/dormitory-student/all",method:"get"}),p=t=>e.request({url:`api/dormitory-student/delete/${t}`,method:"get"}),c=t=>e.request({url:"api/dormitory-student/edit",method:"post",data:t});export{d as a,u as b,s as c,i as d,l as e,m as f,o as g,a as h,n as i,c as j,p as k};