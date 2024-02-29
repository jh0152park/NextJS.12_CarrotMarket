# NextJS.12_CarrotMarket

<div>
  <img width="300" height="300" src="https://mblogthumb-phinf.pstatic.net/MjAyMTEwMTRfMjIw/MDAxNjM0MTM5NDUyMTMw.LQliGvqqaeaScoAJQOYq3WhxapwGyjZjsfPSBMAuiYEg.WRu1NpNPXpJyMesthhuzSfogPnMFihMCGj9917c_PXog.JPEG.empl/IMG_7576.jpg?type=w800" />
</div>

# ✨ Setup

1. run `npx create-next-app@latest --typescript` and delete `home.module.css` and `document.tsx`
2. run `npm install -D tailwindcss postcss autoprefixer`
3. run `npx tailwindcss init -p` (If already exist the `tailwind.config.ts`, then skip)
4. and put the specific path into `tailwind.config.ts` like `"./pages/**/*.{js,ts,jsx,tsx,mdx}"`
    - however probably everything already done when we created with `npx create-next-app@latest --typescript` command
5. fixed `../styles/globals.css` file as below

    ```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

# ✨ Tailwind

### What is Tailwind?

Tailwind is a utility-first CSS framework(not a library) packed with classes. And utility mean is tailwind hass a lot of classes names. Litrally tailwind is huge, fat, massive css class name bundle

### Tiny tip🍯

Basically the style of tailwind is a applies from `small size to large size(mobile to pc screen)`

So, would be better make design for mobile version at the beginning and to pc version

And obviously the style of `sm` is gonna be affect to whole size if dose not use different size like `md` or `lg`, the point is there is no end condition. And size are `sm md lg xl 2xl 3xl etc...`

### Just In Time Compiler

Before tailwind version 3.0 tailwind was literally bunch of a lot of css

So, everything gonna be removed except used when build and deployment at before 3.0 version, and it was called `purging`

But now we can make a stack of many modifires like `black:sm:hover` due to JIT(Just In Time Compiler)

JIT is watching our code and creating the class name what we used🔥

Also we had to put the specific style when wanna dont use tailwind style like `fontSize: 1200px`, however by JIT we can use like it `className="text-[1200px]"`, `className="text-[#fff]"`, `className="bg-[url()]"`

# ✨ What is Prisma?

Prisma is `Node.js` and `TypeScript` ORM(Object Relational Mapping), basically doing like a translator.

Literally a bridge that helps you use a database using only TypeScript without SQL statements.

And have to explain to prisma how looks like our database into `schema.prisam` file.

### Prisma setup

1. Install VSCode prisam extension and name is `Prisam` made by prisma
2. run `npm i prisma -D`
3. run `npx prisma init` then generated prisam folder and .env file
    ```
    Next steps:
    1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
    2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
    3. Run prisma db pull to turn your database schema into a Prisma schema.
    4. Run prisma generate to generate the Prisma Client. You can then start querying your database.
    ```
    - 3-1. chaanged the `datasource provider` from `schema.prisma` to what i gonna use as below. In my case is `mysql`
        ```
        datasource db {
          provider = "mysql"
          url      = env("DATABASE_URL")
        }
        ```
4. create a model to using at database into `schema.prisma` file as below
    ```
    model User {
      id Int @id @default(autoincrement())
    }
    ```

# ✨ What is PlanetScale?

PlanetScale is serverless database platfrom compatible with mysql.

-   database platform mean is they are give us some database
-   serverless mean is we don't need to manage the server not a dose not exist server

And make sure create a new account to use.

Go to [planetsclae](https://planetscale.com/)

### How to install planetscale cli?

Check it out the planetscale cli [github](https://github.com/planetscale/cli)

In my case, using mac os, so just run below command to install

-   run `brew install planetscale/tap/pscale`

### How to create a new database?

1. check can see below comment after run `pscale`
    - `pscale is a CLI library for communicating with PlanetScale's API.`
2. run `pscale auth` for login to planetscale
3. run `pscale region list` to check SLUG name for create a dababase
    ```
     NAME (15)                                          SLUG                          ENABLED
    -------------------------------------------------- ----------------------------- ---------
      AWS us-east-1 (N. Virginia)                        us-east                       Yes
      AWS us-west-2 (Oregon)                             us-west                       Yes
      AWS eu-west-1 (Dublin)                             eu-west                       Yes
      AWS ap-south-1 (Mumbai)                            ap-south                      Yes
      AWS ap-southeast-1 (Singapore)                     ap-southeast                  Yes
      AWS ap-northeast-1 (Tokyo)                         ap-northeast                  Yes
      AWS eu-central-1 (Frankfurt)                       eu-central                    Yes
      AWS ap-southeast-2 (Sydney)                        aws-ap-southeast-2            Yes
      AWS sa-east-1 (Sao Paulo)                          aws-sa-east-1                 Yes
      GCP us-central1 (Council Bluffs, Iowa)             gcp-us-central1               Yes
      AWS eu-west-2 (London)                             aws-eu-west-2                 Yes
      GCP us-east4 (Ashburn, Virginia)                   gcp-us-east4                  Yes
      GCP northamerica-northeast1 (Montréal, Québec)     gcp-northamerica-northeast1   Yes
      GCP asia-northeast3 (Seoul, South Korea)           gcp-asia-northeast3           Yes
      AWS us-east-2 (Ohio)                               aws-us-east-2                 Yes
    ```
4. run `pscale database create [name of database] --region gcp-asia-northeast3`

    - if occurred a error as `Error: You must add a credit card to your account before creating a database.` juat add credit card at homepage

    ```
    Database carrot-market was successfully created.

    View this database in the browser: https://app.planetscale.com/jh0152park/carrot-market
    ```

5. run `pscale connect [name of database]` to connect and don't close the terminal

    ```
    Secure connection to database carrot-market and branch main is established!.

    Local address to connect your application: 127.0.0.1:3306 (press ctrl-c to quit)
    ```

6. copy the url to DTATBASE_URL of prisma at .env file as `DATABASE_URL="mysql://127.0.0.1:3306/carrot-market"`

7. add relationmode into `datasource db` at schema.prisma file as below for protect abnormal work. Because `planetscale` dose not checked that data is exist or dose not exsit when using foreign keys.

    ```
    generator client {
      provider = "prisma-client-js"
    }

    datasource db {
      provider     = "mysql"
      url          = env("DATABASE_URL")
      relationMode = "prisma"
    }
    ```

8. run `npx prisma db push` for push our db models to db at planetscale

    ```
    🚀  Your database is now in sync with your Prisma schema. Done in 430ms

    Running generate... (Use --skip-generate to skip the generators)

    added 1 package, and audited 370 packages in 3s

    129 packages are looking for funding
      run `npm fund` for details

    found 0 vulnerabilities

    ✔ Generated Prisma Client (v5.9.1) to ./node_modules/@prisma/client in 43ms
    ```

    schema.prisma파일에 새로운 모델을 만들게 되면 해당 명령어 다시한번 입력해주면 됨

    근데 중요한건 pscale connect [db-name] 명령어가 실행되는 상태에서 해야 정상동작 함

9. check our schema at the planetscale

# ✨ Prisma Client

1. run `npm i @prisma/client`
2. create a new client file for `prisma client` like `client.ts`

    ```
    // client.ts
    import {PrismaClient} from "@prisma/client"

    export default new PrismaClient();
    ```

3. we can use our models like a object with PrismaClient like as below
    ```
        client.user.create({
        data: {
            email: "",
            name: ""
            }
        })
    ```

그니까 다른 파일에서 client를 import해서 편하게 사용하도록 함, 마치 Firebase의 app처럼

그리고 client를 사용하면 client.user.create와 같이 바로 schema.prisma에 작성한 모델들을 제어할 수 있게됨

# ✨ Prisma Studio

`npx prisma studio` 명령어를 통해서 사용할 수 있음

중요한건 planetscale이 현재 연결이 된 상태여야함(즉 pscale connect 명령어가 선행되어야 한다는 의미)

그러면 터미널에 찍힌 url을 통해서 planetscale에 저장되는 db를 prisma studio를 통해서 간단하게 확인할 수 있게됨

# ✨ API Routes

We can not control and manage our DB directly at frontend side.

So we need server side to control and manage our DB, So created a new folder `api` under `pages` folder

# ✨ Twilo

트윌리오는 Voice call, Video call, Message, Email을 보낼 수 있도록 서비스하는 web api같은 거임

홈페이지: https://www.twilio.com/

DOC: https://www.twilio.com/docs

무료로 계정을 만들면 15$ 정도 트라이얼을 받을 수 있는데, 추후 결제가 필요하지만 당장 기능구현 및 맛을 보는건 가능함

### 회원가입 및 기본 셋업

1. Google Account로 회원가입
2. 핸드폰번호 인증
3. 리커버리 코드 안전한곳에 보관하기
4. 아래처럼 간단한 설정 마무리 하기 (각자 용도, 상황에 맞게 설정하면 됨)
    - What do you plan to build with Twilio? => `Alerts & Notifications`
    - Which Twilio product are you here to use? => `SMS`
    - Which best describes you/your organization? => `Hobbyist or Student`
    - How do you want to build with Twilio? => `With code`
    - What is your preferred coding language? => `JavaScript`
    - Would you like Twilio to host your code? => `No`
5. 완료 후 무료 사용량 15$
    - ![alt text](https://github.com/jh0152park/NextJS.12_CarrotMarket/blob/30c0d0dff9f56234052a196e507d67b401851eb3/image.png?raw=true)
6. Account SID 및 토큰을 .env 파일에 복사
    - ![alt text](https://github.com/jh0152park/NextJS.12_CarrotMarket/blob/30c0d0dff9f56234052a196e507d67b401851eb3/image-1.png?raw=true)
7. 좌측 메뉴 Messaging -> Servics -> Create Messaging Service
    - 7-1. Service Name은 프로젝트를 알아볼 수 있게
    - 7-2. Select what you want to use Messaging for => Notify my users
    - 7-3. Create Messaging Service 클릭
8. Sender Pool로 넘어가면 좌측 메뉴 Messaging -> Try it out -> Send an SMS
    - 8-1. Get Twilio Number를 눌러서 번호 할당 받기
    - 8-2. 좌측 메뉴 Try it out -> Services
    - 8-3. 생성한 프로젝트가 ⚠️ 표시와 함께 마우스를 올려보면 "You must add one or more sender"라고 표시됨
        - ![alt text](https://github.com/jh0152park/NextJS.12_CarrotMarket/blob/30c0d0dff9f56234052a196e507d67b401851eb3/image-2.png?raw=true)
    - 8-4. 프로젝트 클릭
    - 8-5. Add Senders 클릭
    - 8-6. Sender Types는 Phone Number 후 Continue
    - 8-7. 생성했던 Phone Number를 선택 후 Add Phone Number 클릭
        - ![alt text](https://github.com/jh0152park/NextJS.12_CarrotMarket/blob/30c0d0dff9f56234052a196e507d67b401851eb3/image-3.png?raw=true)
9. 좌측메뉴 Messaging -> Try it out -> Send an SMS
    - 9-1. From Sender Phone Number를 방금 추가했던 번호로 선택
    - 9-2. To 부분 선택 (가상번호 or 진짜번호)
    - 9-3. 보낼 메세지 입력 후 전송버튼 클릭
    - ![alt text](https://github.com/jh0152park/NextJS.12_CarrotMarket/blob/30c0d0dff9f56234052a196e507d67b401851eb3/image-4.png?raw=true)
    - ![alt text](https://github.com/jh0152park/NextJS.12_CarrotMarket/blob/30c0d0dff9f56234052a196e507d67b401851eb3/image-5.png?raw=true)
    - ![alt text](https://github.com/jh0152park/NextJS.12_CarrotMarket/blob/30c0d0dff9f56234052a196e507d67b401851eb3/image-6.png?raw=true)
10. 여기서 중요한건 해당 계정으로는 진짜로 입력받는 핸드폰 번호한테 문자를 보낼 수 없음 (트라이얼 계정이기 때문에)

### Twilio sdk 설치 및 문자 보내기

-   run `npm i twilio`

```JS
//enter.tsx

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);
if (phoneNumber) {
        await twilioClient.messages.create({
            messagingServiceSid: process.env.TWILIO_MESSAGE_SID,
            to: process.env.PHONE_NUMBER!,
            body: `Your login token is ${payload}`,
        });
    }
```

### Twilio를 통해서 이메일 보내기

```
후기를 들어보니 매우 느린편인거 같음, 그래서 빠르게 테스트를 해보고 싶다면 nodemiler를 사용해서 네이버로 테스트 해봐도 될듯

설치 명령어 npm install --save nodemailer @types/nodemailer, 네이버 계정을 사용할경우 IMAP/SMTP를 설정해줘야함
```

1. 좌측메뉴 -> Explore Products -> Email
2. Sendgrid로 이동하면 Start for free클릭 후 계정 생성

--> 회원가입을 진행해도 바로 사용할 수 없고, 사용승인을 기다려야해서 그냥 네이버로 진행해야 시간을 아낄거같다.

1. 네이버 이메일 접속
    - 좌측 메뉴 중 하단에 환경설정 클릭
    - POP3/IMAP 설정 클릭
    - IMAP/SMTP 사용함으로 설정
    - 하단에 위치한 POP / SMTP 서버명, 포트명 기억
2. nodemailer 설치
    - `npm install --save nodemailer @types/nodemailer` 명령어 사용
3. @/libs/server/email.ts 생성 및 코드 작성

    - 3-1. .env 파일에 sender로 사용할 이메일과 비밀번호 저장
        - ID의 경우 email address 형태로 저장해야함 (ex: xxx@naver.com)

    ```JS
    import nodemailer from "nodemailer";

    const smtpTransport = nodemailer.createTransport({
        service: "Naver",
        host: "smtp.naver.com",
        port: 465,
        auth: {
            user: process.env.MAIL_ID,
            pass: process.env.MAIL_PASSWORD,
        },
        tls: {
            rejectUnauthorized: false,
        },
    });

    export default smtpTransport;
    ```

4. 메일 보내는 코드 작성
    ```JS
    else if (email) {
        const mailOptions = {
            from: process.env.MAIL_ID,
            to: email,
            subject: "Nomad Carrot Authentication Email",
            text: `Authentication Code : ${payload}`,
        };
        const result = await smtpTransport.sendMail(
            mailOptions,
            (error, responses) => {
                if (error) {
                    console.log("occurred error while sending mail");
                    console.log(error);
                    return null;
                } else {
                    console.log(responses);
                    return null;
                }
            }
        );
        smtpTransport.close();
        console.log(result);
    }
    ```

# ✨ Iron Session

설치: `npm install iron-session` (강의버전은 npm install iron-session@6.3.1)

Doc: https://github.com/vvo/iron-session?tab=readme-ov-file#installation

Iron session
데이터를 저장하기 위해 서명되고 암호화된 쿠키를 사용하는 Node.js stateless session 유틸리티.

Next.js, Express, Nest.js, Fastify 및 모든 Node.js HTTP 프레임워크와 함께 작동합니다. 세션 데이터는 암호화된 쿠키("seals")에 저장됩니다.

그리고 당신의 서버만이 세션 데이터를 디코딩(decode)할 수 있습니다. 세션 ID가 없으므로 서버 관점에서 iron session을 "stateless"로 만듭니다.

req.session.save()
세션 데이터를 암호화하고 쿠키를 설정합니다.

# ✨ Password 생성 사이트

URL: https://passwordsgenerator.net/

# ✨ SWR(Stale While Revalidate)

React Hooks for Data Fetching.

Install: `npm install swr`

useQuery하고 비슷함, fetching한 데이터를 cache해서 데이터가 변하지 않는다면 다시 fetch하지않고 cached된 데이터를 바로 사용할 수 있게 함.

그리고 다른탭에 있다가 돌아오면 알아서 refresh를 하면서 latest상태로 update를 해줌

```
// 여기서 /api/users/me는 단순히 url도 의미하지만, 동시에 key값이기도 하다

const {data, error} = useSWR("/api/users/me")
```

mutate(bound, unbound), refresh 하는 방법

bound와 unbound의 차이는 bound는 현재 컴포넌트, 현재 페이지에서 fetch한 data의 일부 상태를 업데이트 하는것을 의미하고, unbound는 다른 컴포넌트, 다른 페이지에서 사용하는 fetch한 data의 상태를 업데이트 시킬 수 있다.

즉 unbound한 mutate를 사용하면 `/pages/products/index.tsx`에서 `/pages/messages/index.tsx`에서 사용하고 있는 fetch한 데이터의 상태를 업데이트 시킬수 있다.

-   bound한 mutate

    ```JS
    const {data, mutate} = useSWR("/api/products");
    mutate((prev) => && prev && {...prev, key:update value}, false);
    //or
    boundMutate({ ...data, isLiked: !data.isLiked }, false);

    // 여기서 두번째 인자의 default값은 true인데,
    // true일 경우 mustae 즉 업데이트가 완료된 후, 자동으로 업데이트한 값이 유효한지 체크하는걸 의미하고
    // false일 경우 이 행위를 하지 않는다. 즉 ture일 경우 다시한번 fetch한다
    ```

-   unbound한 mutate

    ```JS
    //pages/products/index.tsx
    const {mutate} = useSWRConfig();
    mutate("/api/user/me", (prev:any) => ({isSuccess: !prev.isSuccess}), false);

    // 첫번째 인자로 specific한 key값이 필요한데, useSWR에 사용하느 url은 단순한 url이 아니라 동시에 key이다.
    // 2,3 번째의 인자는 bound한 mutate의 1,2번째 인자와 동일하다
    ```

-   단순한 refetch

    ```JS
    const {mutate} = useSWRConfig();
    mutate("/api/user/me");

    // key값만 넣어주면 된다
    ```

# ✨ Prisma Seed

테스트를 위해서 여러개의 가짜 데이터가 필요할때 prisma seed를 사용해서 생성할 수 있음

참고용 [commit](https://github.com/jh0152park/NextJS.12_CarrotMarket/pull/117/commits/3e9a44418c571661b778aec0ea5e52e9838f4443)

1. `npm install ts-node`

2. prisma 폴더내에 `seed.ts` 파일 생성

```TS
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function main() {
    [...Array.from(Array(500).keys())].forEach(async (item) => {
        const stream = await client.stream.create({
            data: {
                name: String(item),
                description: String(item),
                price: item,
                user: {
                    connect: {
                        id: 1,
                    },
                },
            },
        });
        console.log(`${item}/500`);
    });
}

main()
    .catch((e) => console.log(e))
    .finally(() => client.$disconnect());

```

3. package.json에 prisma 추가

```
"prisma": {
        "seed": "ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed.ts"
    }
```

4. npx prisma db seed 실행

# ✨ Prisma Pagination

DB를 읽어올때 한번에 모든 데이터를 읽어들이는거는 장기적으로 볼때 좋지 않을 수 있다.

속도도 느려질 수 있을뿐 아니라 PlanetScale을 사용하면서 free read limit을 넘기면 돈을 내야하기 때문이지,,ㅋㅋ

그래서 GET request를 처리할때 db를 읽을때 prisma에서 제공하는 pagination 기능을 사용하자. (모든 부분에서 사용하는게 맞다고 함)

front에서 get request query로 ?page=1 이런식으로 넘겨주면, 뒷단에서 저 query를 확인해서 얼만큼 take하고 얼만큼 skip할지 정할 수 있다.

그리고 관계형DB에서도 사용이 가능하다.

예시

```TS
else if (req.method === "GET") {
    const streams = await client.stream.findMany({
        take: 10,
        skip: 20,
    });
    res.json({ isSuccess: true, streams });
}
```
