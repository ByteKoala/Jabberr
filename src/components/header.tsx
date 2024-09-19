import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
interface Props{
  onOpen():void;
}
export function Header(props:Props) {
  const onOpen = props.onOpen;
  const { data: session } = useSession();
  const devMode = process.env.REACT_APP_DEV_MODE as string;
  return (
    <header className="p-6 bg-white border-b border-[#363739]">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center">
          <p className="inline-flex items-center space-x-3">
            <a
              href="https://github.com/kenKoala606"
              target="_blank"
              rel="noopener noreferrer"
            >
               <svg height="40" width="40" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  
               className="flex-shrink-0 h-8 w-8 fill-current text-sky-400 hover:text-sky-800 transition"
	 viewBox="0 0 512 512">
    <path fill="#88888F" d="M83.027,186.811v27.676c0,68.782,55.758,124.541,124.541,124.541h27.676V186.811H83.027z"/>
<path fill="#F8E99B"  d="M207.568,6.919C92.931,6.919,0,99.85,0,214.486h235.243V6.919H207.568z"/>
<path fill="#E07188" d="M207.568,6.919v332.108c0,91.709,74.345,166.054,166.054,166.054H512V6.919H207.568z"/>
<path  fill="#E02753" d="M359.784,6.919v497.584c4.564,0.376,9.177,0.578,13.838,0.578H512V6.919H359.784z"/>
<circle fill="#F8F8F9"  cx="359.784" cy="159.135" r="83.027"/>
<path fill="#EDEDED" d="M359.784,76.108v166.054c45.854,0,83.027-37.173,83.027-83.027S405.638,76.108,359.784,76.108z"/>
<path  fill="#58575D" d="M359.784,186.811h-0.003c-15.259,0-27.673-12.415-27.673-27.676
	c0.006-15.263,12.421-27.676,27.676-27.676c15.26,0,27.676,12.415,27.676,27.676S375.044,186.811,359.784,186.811z"/>
   </svg>
              
                
            </a>
            <span className="text-sky-400 font-bold text-xl">Jabberr</span>
          </p>
          {session ? (
            <div className="flex space-x-1">
              {session?.user?.image && (
                <div className="w-12 h-12 rounded overflow-hidden">
                  <Image
                    width={50}
                    height={50}
                    src={session?.user?.image}
                    alt={session?.user?.name || "User profile picture"}
                    title={session?.user?.name || "User profile picture"}
                  />
                </div>
              )}
              <button
                onClick={() => signOut()}
                className="bg-white/5 rounded h-12 px-6 font-medium text-sky-400 border border-transparent"
              >
                Sign out
              </button>
            </div>
          ) : (
            <div className="flex items-center " >
              <span className="text-sky-400"> Log in with</span>
              <button
                onClick={() => signIn("google")}
                className="bg-white/5 rounded h-12 px-6 font-medium text-sky-400 text-lg border border-transparent inline-flex items-center"
              >
                  <svg width="30" height="30" viewBox="-0.5 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" >

                    <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="Color-" transform="translate(-401.000000, -860.000000)">
                        <g id="Google" transform="translate(401.000000, 860.000000)">
                          <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05">
                          </path>
                          <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335">
                          </path>
                          <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853">
                          </path>
                          <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4">
                          </path>
                        </g>
                      </g>
                    </g>
                  </svg>
              </button>
              <button
                onClick={() => signIn("facebook")}
                className="bg-white/5 rounded h-12 px-6 font-medium text-sky-400 text-lg border border-transparent inline-flex items-center"
              >
              <svg width="30" height="30" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Color-" transform="translate(-200.000000, -160.000000)" fill="#4460A0">
            <path d="M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z" id="Facebook">
</path>
        </g>
    </g>
</svg>
              </button>
              <button
                onClick={() => signIn("github")}
                className="bg-white/5 rounded h-12 px-6 font-medium text-sky-400 text-lg border border-transparent inline-flex items-center"
              >
               <svg width="30" height="30" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#161514" fill-rule="evenodd" d="M8 1C4.133 1 1 4.13 1 7.993c0 3.09 2.006 5.71 4.787 6.635.35.064.478-.152.478-.337 0-.166-.006-.606-.01-1.19-1.947.423-2.357-.937-2.357-.937-.319-.808-.778-1.023-.778-1.023-.635-.434.048-.425.048-.425.703.05 1.073.72 1.073.72.624 1.07 1.638.76 2.037.582.063-.452.244-.76.444-.935-1.554-.176-3.188-.776-3.188-3.456 0-.763.273-1.388.72-1.876-.072-.177-.312-.888.07-1.85 0 0 .586-.189 1.924.716A6.711 6.711 0 018 4.381c.595.003 1.194.08 1.753.236 1.336-.905 1.923-.717 1.923-.717.382.963.142 1.674.07 1.85.448.49.72 1.114.72 1.877 0 2.686-1.638 3.278-3.197 3.45.251.216.475.643.475 1.296 0 .934-.009 1.688-.009 1.918 0 .187.127.404.482.336A6.996 6.996 0 0015 7.993 6.997 6.997 0 008 1z" clip-rule="evenodd"/>
               </svg>
              </button>

              <span className="text-sky-400" onClick={onOpen  }> Contact US</span>
               </div>
            
          )}
        </div>
      </div>
    </header>
  );
}
