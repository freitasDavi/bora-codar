import music from "./assets/music.png";
import { ReactComponent as Play } from "./assets/play.svg";
import { ReactComponent as PlayBack } from "./assets/play-back.svg";
import { ReactComponent as PlayForward } from "./assets/play-forward.svg";

function App() {

  return (
    <main className="bg-theme-900 w-screen h-screen">
      <section className="
          flex justify-center items-center w-2/4 h-full mx-auto
          overflow-hidden">
        <div id="player1" class="w-1/2 h-3/4 flex justify-center items-center">
          <div class="w-[80%] h-[80%] bg-theme-600 rounded-lg flex flex-col pt-16 px-16 gap-7">
            <img src={music} className="w-64 h-64 object-cover rounded-lg" />
            <div>
              <h2 className="text-theme-300 font-bold text-3xl text-left">Acorda Devinho</h2>
              <h3 className="text-theme-300 font-light text-2xl">Banda Rocketseat</h3>
            </div>
            <div id="actions" className="flex items-center justify-between">
              <PlayBack />
              <Play />
              <PlayForward />
            </div>
            <div>
              <div className="w-full flex flex-auto rounded-full bg-theme-200 bg-opacity-30">
                <div className="h-2 w-5/6 flex-none rounded-full bg-theme-200 bg-opacity-90"></div>
              </div>
              <div className="flex justify-between">
                <p className="text-theme-100">03:20</p><p className="text-theme-100">00:12</p>
              </div>
            </div>
          </div>
        </div>
        <div id="smallPlayers" className="w-1/2 h-3/4 bg-theme-300">
          <div id="smallPlayer" className="w-full bg-slate-500 h-96">

          </div>
          <div id="smallestPlayer" className="w-full h-2/4 bg-blue-600">

          </div>
        </div>
      </section>
    </main>
  )
}

export default App
