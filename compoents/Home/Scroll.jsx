import ScrollExpand from "../ui/ScrollExpand";

export default function Scroll() {
  return (
    <ScrollExpand
      src="https://images.unsplash.com/photo-1718375679794-7aa0ddf4f4e5?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="LED Lighting Collection"
      title={ <>
          Lighting That Transforms{" "}
          <span className="text-[#85a30f]">
            Every Space
          </span>
        </>}
      scrollHint="Discover More"
    >
      <div className="space-y-4 text-white">
        <h2 className="text-4xl font-semibold">
          <span className="text-[#85a30f]">Smart. Elegant.</span> Energy Efficient.
        </h2>

        <p className="text-2xl" >
          From architectural lighting to commercial LED solutions, we design
          lighting products that combine performance, efficiency, and modern
          aesthetics.
        </p>
      </div>
    </ScrollExpand>
  );
}
