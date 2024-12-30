export function ContentSection16() {
  return (
    <section className="p-8 bg-gray-50">
      <div className="mx-auto max-w-screen-md">
        {/* Image Section */}
        <img
          src="https://www.material-tailwind.com/img/content2.jpg"
          alt="team work"
          className="mb-6 h-[28rem] w-full rounded-xl object-cover shadow-lg"
        />

        {/* Tags */}
        <div className="mb-4 flex gap-3">
          <span className="font-medium text-blue-500 text-sm">#blog</span>
          <span className="font-medium text-blue-500 text-sm">#post</span>
        </div>

        {/* Title */}
        <h2 className="mb-6 font-extrabold text-3xl md:text-4xl text-gray-800 leading-snug">
          The Castle Looks Different at Night...
        </h2>

        {/* Content */}
        <p className="mb-8 font-normal text-gray-700 leading-relaxed">
          This is the paragraph where you can write more details about your
          product. Keep your user engaged by providing meaningful information.
          Remember that by this time, the user is curious; otherwise, they
          wouldn’t scroll to get here. Add a button if you want the user to see
          more. We are here to make life better.
          <br />
          <br />
          And now I look and look around, and there are so many Kanyes. I’ve
          been trying to figure out the bed design for the master bedroom at our
          Hidden Hills compound... and thank you for turning my personal jean
          jacket into a couture piece.
          <br />
          <br />
          Thank you, Anna, for the invite. Thank you to the whole Vogue team.
          And I love you like Kanye loves Kanye. Panda, Panda, Panda. I’ve been
          trying to figure out the bed design for the master bedroom at our
          Hidden Hills compound... The Pablo pop-up was almost a pop-up of
          influence. All respect, prayers, and love to Phife’s family. Thank you
          for so much inspiration. Daytime, I love this new Ferg album! The Life
          of Pablo is now available for purchase. I have a dream. Thank you to
          everybody who made The Life of Pablo the number 1 album in the world!
          I’m so proud of the #1 song in the country. Panda!
        </p>

        {/* Call-to-Action */}
        <div className="text-center">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-600 transition duration-200">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}

export default ContentSection16;
