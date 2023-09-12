import MenuBar from "../components/MenuBar";

async function Home() {

    const { Client, APIErrorCode } = require("@notionhq/client")

    try {
      const notion = new Client({ auth: process.env.NOTION_TOKEN })
      const myPage = await notion.databases.query({
        database_id: "e12882d136074066b2a42292d8e7ee9d",
        // filter: {
        //   property: "Landmark",
        //   rich_text: {
        //     contains: "Bridge",
        //   },
        // },
      })
    } catch (error) {
      if (error.code === APIErrorCode.ObjectNotFound) {
        //
        // For example: handle by asking the user to select a different database
        //
      } else {
        // Other error handling code
        console.error(error)
      }
    }

    return (
        <div>
            <MenuBar />
            <h1>Home</h1>
            <p>Welcome to tuna's Lunch Box! 🍱</p>
            <p>Hi from Nonhyeon! 🥸👋🏻</p>
        </div>
    );
}

export default Home;
