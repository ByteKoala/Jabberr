import DatePicker from "react-datepicker";
import { gql, useMutation } from "@apollo/client";
import { useSession } from "next-auth/react";
import { useState, useRef} from "react";
import {Editor} from '@tinymce/tinymce-react'
import "react-datepicker/dist/react-datepicker.css";
const pushText = gql`
  mutation AddNewMessage($username: String!, $avatar: String!, $value: String!) {
    messageCreate(
      input: { username: $username, avatar: $avatar, value: $value }
    ) {
      message {
        id
      }
    }
  }
`;

export const InputBox = () => {
  const editorRef = useRef(null);
  const [value, setValue] = useState("");
  const { data: session } = useSession();
  const [startDate, setStartDate] = useState(new Date());
  const [addNewMessage] = useMutation(pushText, {
    onCompleted: () => console.log("sent success"),
  });

  return (
    <>
    <input type="text" id="first_name" className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tittle" required />
    <DatePicker selected={startDate}  />
        <Editor
    apiKey='p0etlmddoe2fo7vr6o0fy94zeom6mtxkb5thttp4yvbu9nih'
    onInit={(_evt, editor) => editorRef.current= editor as any}
    initialValue="<p>This is the initial content of the editor.</p>"
    init={{
      max_height: 1000,
      height: "15rem",
      menubar: false,
      plugins: [
        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
        'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
      ],
      toolbar: 'undo redo | blocks | ' +
        'bold italic forecolor | alignleft aligncenter ' +
        'alignright alignjustify | bullist numlist outdent indent | ' +
        'removeformat | help',
        tinycomments_mode: 'embedded',
        tinycomments_author: 'Author name',
      content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
    }}/>
     <div className="relative">   
      <div className="absolute bottom-px inset-x-px p-2 rounded-b-md bg-white dark:bg-neutral-900">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <button type="button" className="inline-flex shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:bg-gray-100 focus:z-10 focus:outline-none focus:bg-gray-100 dark:text-neutral-500 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
              <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <line x1="9" x2="15" y1="15" y2="9"></line>
              </svg>
            </button>
    
            <button type="button" className="inline-flex shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:bg-gray-100 focus:z-10 focus:outline-none focus:bg-gray-100 dark:text-neutral-500 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
              <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
              </svg>
            </button>
          </div>
    
          <div className="flex items-center gap-x-1">
            <button type="button" className="inline-flex shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:bg-gray-100 focus:z-10 focus:outline-none focus:bg-gray-100 dark:text-neutral-500 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
              <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                <line x1="12" x2="12" y1="19" y2="22"></line>
              </svg>
            </button>
    
            <button type="button"
              onClick={(e) => {
                e.preventDefault();
        
                if (value) {
                  addNewMessage({
                    variables: {
                      username: session?.username ?? "",
                      avatar: session?.user?.image,
                      value,
                    },
                  });
                  setValue("");
                }
              }} 
            className="inline-flex shrink-0 justify-center items-center size-8 rounded-lg text-white bg-blue-600 hover:bg-blue-500 focus:z-10 focus:outline-none focus:bg-blue-500">
              <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

  /**
   * <div className="w-full max-w-xl mx-auto text-center bg-white rounded-2xl shadow-xl">
    <header>
        <div className="h-12 border-b [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1]">
            <div className="h-full flex justify-between items-center sm:gap-1 overflow-x-scroll [scrollbar-width:none] px-3">
                <div className="flex-1 flex sm:gap-1">
                    <button className="flex justify-center items-center size-8 text-slate-400 hover:text-slate-500 hover:bg-slate-100 rounded focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300" aria-label="Font size" title="Font size">
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="16" height="14">
                            <path d="M14 1a1 1 0 0 1-1 1H8v11a1 1 0 1 1-2 0V2H1a1 1 0 1 1 0-2h12a1 1 0 0 1 1 1Zm-.616 3.18a.517.517 0 0 0-.768 0l-2.5 3A.499.499 0 0 0 10.5 8h5a.5.5 0 0 0 .384-.82l-2.5-3ZM15.5 10h-5a.5.5 0 0 0-.384.82l2.5 3a.499.499 0 0 0 .768 0l2.5-3A.499.499 0 0 0 15.5 10Z" />
                        </svg>                                                                          
                    </button>
                    <button className="flex justify-center items-center size-8 text-slate-400 hover:text-slate-500 hover:bg-slate-100 rounded focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300" aria-label="Bold" title="Bold">
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="10" height="14">
                            <path d="M8.443 6.242c.45-.649.724-1.442.724-2.304C9.167 1.767 7.484 0 5.417 0H1.25C.56 0 0 .587 0 1.313v11.374C0 13.413.56 14 1.25 14h4.583C8.131 14 10 12.037 10 9.625c0-1.37-.615-2.58-1.557-3.383ZM2.5 2.625h2.917c.689 0 1.25.589 1.25 1.313 0 .723-.561 1.312-1.25 1.312H2.5V2.625Zm3.333 8.75H2.5v-3.5h3.333c.92 0 1.667.785 1.667 1.75s-.747 1.75-1.667 1.75Z" />
                        </svg>                                               
                    </button>
                    <button className="flex justify-center items-center size-8 text-slate-400 hover:text-slate-500 hover:bg-slate-100 rounded focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300" aria-label="Underline" title="Underline">
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="14" height="16">
                            <path d="M2 7c0 2.757 2.243 5 5 5s5-2.243 5-5V1a1 1 0 1 0-2 0v6c0 1.654-1.346 3-3 3S4 8.654 4 7V1a1 1 0 1 0-2 0v6Zm-2 8a1 1 0 0 0 1 1h12a1 1 0 1 0 0-2H1a1 1 0 0 0-1 1Z" />
                        </svg>                        
                    </button>
                    <button className="flex justify-center items-center size-8 text-slate-400 hover:text-slate-500 hover:bg-slate-100 rounded focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300" aria-label="Italic" title="Italic">
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="8" height="14">
                            <path d="M7.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM3.75 4.648a1.002 1.002 0 0 1 1.287-.584h.001c.518.194.778.77.585 1.287l-3.006 8a1.004 1.004 0 0 1-1.289.585 1.001 1.001 0 0 1-.585-1.288l3.006-8Z" />
                        </svg>                                                                          
                    </button>
                </div>
                <div className="flex sm:gap-1">
                    <button className="flex justify-center items-center size-8 text-slate-400 hover:text-slate-500 hover:bg-slate-100 rounded focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300" aria-label="Align left" title="Align left">
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="16" height="14">
                            <path d="M1 2h14a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2Zm0 4h6a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2Zm0 4a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2H1Zm0 4h6a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2Z" />
                        </svg>                                                                          
                    </button>
                    <button className="flex justify-center items-center size-8 text-slate-400 hover:text-slate-500 hover:bg-slate-100 rounded focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300" aria-label="Align center" title="Align center">
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="16" height="14">
                            <path d="M1 2h14a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2Zm4 4h6a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2Zm10 4H1a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2ZM5 14h6a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2Z" />
                        </svg>                                               
                    </button>
                    <button className="flex justify-center items-center size-8 text-slate-400 hover:text-slate-500 hover:bg-slate-100 rounded focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300" aria-label="Align right" title="Align right">
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="16" height="14">
                            <path d="M1 2h14a1 1 0 1 0 0-2H1a1 1 0 1 0 0 2Zm8 4h6a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2Zm-8 4a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2H1Zm8 4h6a1 1 0 1 0 0-2H9a1 1 0 1 0 0 2Z" />
                        </svg>                        
                    </button>
                </div>    
                <div className="flex-1 flex justify-end sm:gap-1">
                    <button className="flex justify-center items-center size-8 text-indigo-500 hover:bg-slate-100 rounded focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300" aria-label="Highlight" title="Highlight">
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                            <path d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z" />
                        </svg>                                                                          
                    </button>
                    <button className="flex justify-center items-center size-8 text-slate-400 hover:text-slate-500 hover:bg-slate-100 rounded focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300" aria-label="Add cite" title="Add cite">
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="16" height="14">
                            <path d="M2 7h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7.072C0 2.652 2.171.828 3.991.076a1.001 1.001 0 0 1 .764 1.848C2.918 2.684 2.017 4.344 2 7Zm9 0h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V7.072C9 2.653 11.171.828 12.991.076a1.001 1.001 0 0 1 .764 1.848C11.918 2.684 11.017 4.344 11 7Z" />
                        </svg>                                               
                    </button>
                    <button className="flex justify-center items-center size-8 text-slate-400 hover:text-slate-500 hover:bg-slate-100 rounded focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300" aria-label="Add link" title="Add link">
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                            <path d="M9.444 6.832a1 1 0 0 0 1.263-.125l5-5A1 1 0 0 0 14.293.293l-5 5a1 1 0 0 0 .151 1.539Zm-6.96 2.437L.962 10.792l-.385-.898c-.058-.148-1.061-2.83.712-4.6l4.03-4.03C7.096-.512 9.773.49 9.886.534l.933.4-1.522 1.523-.163-.07s-1.558-.554-2.4.288l-4.03 4.03c-.851.851-.281 2.42-.275 2.435l.055.128Zm-2.04 6.563a1 1 0 0 0 1.263-.125l5-5a1 1 0 0 0-1.414-1.414l-5 5a1 1 0 0 0 .151 1.539Zm4.767-.797 1.523-1.522.128.055c.016.006 1.584.576 2.435-.275l4.03-4.03c.842-.842.288-2.4.288-2.4l-.07-.163 1.523-1.523.4.933c.044.113 1.046 2.794-.728 4.567l-4.03 4.03c-1.771 1.773-4.453.77-4.6.712l-.9-.384Z" />
                        </svg>                        
                    </button>
                </div>                                 
            </div>
        </div>
    </header>
    <div>
        <textarea className="w-full text-sm text-slate-600 placeholder:text-slate-400 px-3 sm:px-5 py-4 resize-none focus:outline-none" name="editor" id="editor" placeholder="Type here..."></textarea>
    </div>
    <footer>
        <div className="h-12 border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1]">
            <div className="h-full flex justify-between items-center sm:gap-1 overflow-x-scroll [scrollbar-width:none] px-3">
                <div className="flex items-center">
                    <div className="pr-5 relative flex items-center after:absolute after:right-2.5 after:h-6 after:w-px after:bg-slate-200">
                        <button className="flex justify-center items-center size-8 text-red-400 hover:text-red-500 hover:bg-slate-100 rounded focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300" aria-label="Delete" title="Delete">
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                <path d="M15 3h-4V1a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v2H1a1 1 0 0 0 0 2h14a1 1 0 1 0 0-2ZM7 2h2v1H7V2Zm-.5 5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5h1Zm4 0a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5h1ZM3 14h10V6h2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6h2v8Z" />
                            </svg>                                                                          
                        </button>                                    
                    </div>
                    <div className="flex sm:gap-1">
                        <button className="flex justify-center items-center size-8 text-slate-400 hover:text-slate-500 hover:bg-slate-100 rounded focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300" aria-label="Add emoji" title="Add emoji">
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6ZM6 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
                            </svg>                                                                          
                        </button>
                        <button className="flex justify-center items-center size-8 text-slate-400 hover:text-slate-500 hover:bg-slate-100 rounded focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300" aria-label="Add external link" title="Add external link">
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                <path d="M11 0C9.7 0 8.4.5 7.5 1.5L6.3 2.6c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0l1.2-1.2c1.1-1.1 3.1-1.1 4.2 0 .6.6.9 1.4.9 2.2 0 .8-.3 1.6-.9 2.1L12 8.3c-.4.4-.4 1 0 1.4.2.2.5.3.7.3.2 0 .5-.1.7-.3l1.2-1.2C15.5 7.6 16 6.3 16 5c0-1.3-.5-2.6-1.5-3.5C13.6.5 12.3 0 11 0ZM7.1 13.2c-1.1 1.1-3.1 1.1-4.2 0-.6-.6-.9-1.4-.9-2.2 0-.8.3-1.6.9-2.1L4 7.7c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L1.5 7.5C.5 8.4 0 9.7 0 11c0 1.3.5 2.6 1.5 3.5.9 1 2.2 1.5 3.5 1.5 1.3 0 2.6-.5 3.5-1.5l1.2-1.2c.4-.4.4-1 0-1.4-.4-.4-1-.3-1.4.1l-1.2 1.2ZM5.198 9.4l4.2-4.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4.2 4.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4Z" />
                            </svg>                                               
                        </button>
                        <button className="flex justify-center items-center size-8 text-slate-400 hover:text-slate-500 hover:bg-slate-100 rounded focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300" aria-label="New row" title="New row">
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="12" height="16">
                                <path d="M11.71 9.293a1 1 0 0 0-1.414 0l-3.293 3.293V1a1 1 0 0 0-2 0v11.586L1.71 9.293a1 1 0 0 0-1.414 1.414l5 5a1 1 0 0 0 1.414 0l5-5a1 1 0 0 0 0-1.414Z" />
                            </svg>                        
                        </button>
                        <button className="flex justify-center items-center size-8 text-slate-400 hover:text-slate-500 hover:bg-slate-100 rounded focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300" aria-label="More actions" title="More actions">
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="16" height="4">
                                <path d="M2 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm8-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                            </svg>                                                                          
                        </button>
                    </div>
                </div>
                <div>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-lg h-8 px-2 text-sm font-medium text-indigo-500 hover:text-white hover:bg-indigo-500 focus-visible:text-white focus-visible:bg-indigo-500 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors">
                        Send                                                                        
                    </button>
                </div>                                 
            </div>
        </div>
    </footer>
</div>


    <div className="relative">
      <textarea id="hs-textarea-ex-1"  value={value}
        onChange={(e) => setValue(e.target.value)} 
        className="p-4 pb-12 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="jot anything here..." >

      </textarea>
    
      <div className="absolute bottom-px inset-x-px p-2 rounded-b-md bg-white dark:bg-neutral-900">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <button type="button" className="inline-flex shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:bg-gray-100 focus:z-10 focus:outline-none focus:bg-gray-100 dark:text-neutral-500 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
              <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <line x1="9" x2="15" y1="15" y2="9"></line>
              </svg>
            </button>
    
            <button type="button" className="inline-flex shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:bg-gray-100 focus:z-10 focus:outline-none focus:bg-gray-100 dark:text-neutral-500 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
              <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
              </svg>
            </button>
          </div>
    
          <div className="flex items-center gap-x-1">
            <button type="button" className="inline-flex shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:bg-gray-100 focus:z-10 focus:outline-none focus:bg-gray-100 dark:text-neutral-500 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
              <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                <line x1="12" x2="12" y1="19" y2="22"></line>
              </svg>
            </button>
    
            <button type="button"
              onClick={(e) => {
                e.preventDefault();
        
                if (value) {
                  addNewMessage({
                    variables: {
                      username: session?.username ?? "",
                      avatar: session?.user?.image,
                      value,
                    },
                  });
                  setValue("");
                }
              }} 
            className="inline-flex shrink-0 justify-center items-center size-8 rounded-lg text-white bg-blue-600 hover:bg-blue-500 focus:z-10 focus:outline-none focus:bg-blue-500">
              <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
   */
