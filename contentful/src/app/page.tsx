import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { get } from "http";
import { Gentium_Book_Plus } from "next/font/google";
import Image from "next/image";
export default async function Home() {
  const getBlogs = async () => {
    const url = `https://cdn.contentful.com/spaces/${process.env.SPACEID}/environments/${process.env.ENVIRONMENTID}/entries?access_token=${process.env.ACCESSTOKEN}`;
    const response = await fetch(url, { cache: "no-store" });
    return response.json();
  };

  const getImage = async (assetid: any) => {
    const url = `https://cdn.contentful.com/spaces/d2xxfgh2v9q5/environments/master/assets/${assetid}?access_token=IlQsMQeuagnMSb5vaPBG7oq-UpRyg1mdADJtGKJQS_s`;
    const response = await fetch(url);
    const data = await response.json();
    return "https:" + data.fields.file.url;
  };

  const blogs = await getBlogs();
  console.log(blogs);
  return (
    <>
      <div>
        <h1>All Blogs</h1>
        {blogs.items.map(async (item: any, index: any) => {
          let image: any = await getImage(item.fields.image.sys.id);
          console.log(image);
          return (
            <div key={index}>
              <h2>{item.fields.title}</h2>
              {documentToReactComponents(item.fields.body)}
              <Image alt="image" width={700} height={700} src={image} />
            </div>
          );
        })}
      </div>
    </>
  );
}
