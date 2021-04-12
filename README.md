

### 리니어 아이콘 사이트
[리니어 아이콘으로 이동](https://linearicons.com/free)

# Modern Javascript

### ajax 실습시 JSON Server 설치(가상 Rest Api)
```shell script
$ mkdir json-server-exam
$ cd json-server-exam
$ npm init -y
$ npm install json-server -D
```

- package.json에 추가
```json
"scripts": {
    "start": "json-server --watch db.json --port 5000"    
  },
```
`$ npm start`로 서버실행

---

