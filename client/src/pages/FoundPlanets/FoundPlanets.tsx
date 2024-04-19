import { useTranslation } from "react-i18next";
import {FoundPlanetsType} from "../../Models/FoundPlanetsType";
const FoundPlanets = () => {
        const { t } = useTranslation();
        const foundPlanetsTitles: FoundPlanetsType = {
            planetName: "newPlanetName",
            galaxyName: "planetGalaxyName",
            diameter: "planetDiameter",
            distance: "planetDistance",
            yourName: "userName",
            yourEmail: "userEmail"
        }
    return (
        <>
            <div className="mt-20 container mx-auto">
                <div className="table-container overflow-x-auto">
                    <table className={`table-auto w-full`}>
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px-4 py-2">{t(foundPlanetsTitles.planetName)}</th>
                                <th className="px-4 py-2">{t(foundPlanetsTitles.galaxyName)}</th>
                                <th className="px-4 py-2">{t(foundPlanetsTitles.diameter)}</th>
                                <th className="px-4 py-2">{t(foundPlanetsTitles.distance)}</th>
                                <th className="px-4 py-2">{t(foundPlanetsTitles.yourName)}</th>
                                <th className="px-4 py-2">{t(foundPlanetsTitles.yourEmail)}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-4 py-2 text-center">Mars</td>
                                <td className="border px-4 py-2 text-center">Milky Way</td>
                                <td className="border px-4 py-2 text-center">65165</td>
                                <td className="border px-4 py-2 text-center">54454</td>
                                <td className="border px-4 py-2 text-center">David</td>
                                <td className="border px-4 py-2 text-center">davidgyulinyan@gmail.com</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default FoundPlanets;
