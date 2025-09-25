import * as THREE from "three";

function drawThreeGeo({ json, radius, materialOptions = {} }) {
    const material = new THREE.LineBasicMaterial(materialOptions);
    const group = new THREE.Group();

    json.features.forEach(feature => {
        const coordinates = feature.geometry.coordinates;
        if (feature.geometry.type === "Polygon") {
            coordinates.forEach(polygon => {
                const points = polygon.map(coord => {
                    const [lon, lat] = coord;
                    const phi = (90 - lat) * (Math.PI / 180);
                    const theta = (lon + 180) * (Math.PI / 180);
                    return new THREE.Vector3(
                        radius * Math.sin(phi) * Math.cos(theta),
                        radius * Math.cos(phi),
                        radius * Math.sin(phi) * Math.sin(theta)
                    );
                });

                const geometry = new THREE.BufferGeometry().setFromPoints(points);
                const line = new THREE.LineLoop(geometry, material);
                group.add(line);
            });
        }
    });

    return group;
}

export default drawThreeGeo;
