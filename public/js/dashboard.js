const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#blog-title').value.trim();
  const content = document.querySelector('#blog-content').value.trim();

  if (title && content) {
    const response = await fetch(`/api/blogs`, {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create blog post');
    }
  }
};

const clickButtonHandler = async (event) => {

const button = event.target.getAttribute('data-button')

  if (button==="delete-btn") {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/blogs/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
      console.log(response)
    } else {
      alert('Failed to delete blog post');
    }
  }

  if (button==="edit-btn") {
    const id = event.target.getAttribute('data-id');
    const blogTitle = document.getElementById(`${id}-blog-title`).textContent.trim()
    console.log(blogTitle);
    const blogContent = document.getElementById(`${id}-blog-content`).textContent.trim();

    const response = await fetch(`/api/blogs/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ blogTitle, blogContent }),
      headers: {
        'Content-Type': 'application/json',
      },
    });


    if (response.ok) {
      // document.location.replace('/dashboard');
    
      console.log(response)
    } else {
      alert('Failed to update blog post');
    }
  }
};

document
  .querySelector('.new-blog-post')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.blog-list')
  .addEventListener('click', clickButtonHandler);
