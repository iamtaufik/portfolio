import React from 'react';

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: 'Belajar Programing',
      image: 'https://source.unsplash.com/360x200?programing',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit ab, maxime sed id nisi enim.',
      link: '#',
    },
    {
      id: 2,
      title: 'Belajar Membuat API Dengan Express',
      image: 'https://source.unsplash.com/360x200?programing',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae consequuntur adipisci dolores?',
      link: '#',
    },
    {
      id: 3,
      title: 'Scraping Website Menggunakan Cherio',
      image: 'https://source.unsplash.com/360x200?programing',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia unde qui quas deleniti?',
      link: '#',
    },
  ];

  return (
    <section id="blg" className="pt-36 pb-32 bg-slate-100">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary">Blog</h4>
            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">Tulisan Terkini</h2>
            <p className="font-medium text-md text-secondary md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam recusandae accusantium consequatur autem.</p>
          </div>
        </div>
        <div className="flex flex-wrap">
          {blogs.map((blog) => (
            <div key={blog.id} className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-10">
                <img src={blog.image} alt="Programing" className="w-full" />
                <div className="py-8 px-6">
                  <h3>
                    <a href={blog.link} className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">
                      {blog.title}
                    </a>
                  </h3>
                  <p className="font-medium text-base text-secondary mb-4">{blog.description}</p>
                  <a href={blog.link} className="font-medium text-smal text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80">
                    Baca Selengkapnya
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
