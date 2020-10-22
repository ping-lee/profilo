export default function DefaultLayout({ children, frontMatter }) {
    const { slug } = frontMatter
return <div style={{border: "1px solid red"}}>{ children }</div>

}