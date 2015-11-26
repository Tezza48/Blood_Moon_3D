#pragma strict

private var moon : GameObject;
private var moonRigid : Rigidbody;
private var torque : float = 10;

function Start () {
      moon = GameObject.Find("Moon");
      moonRigid = moon.GetComponent.<Rigidbody>();
}

function Update () {
	
	var rotX = -Input.GetAxis ( "Vertical" ) * torque * Time.deltaTime;
	var rotY = Input.GetAxis ( "Horizontal" ) * torque * Time.deltaTime;
	
	var currentX = moonRigid.rotation.eulerAngles.x;
	var currentY = moonRigid.rotation.eulerAngles.y;
	var currentZ = moonRigid.rotation.eulerAngles.z;
	
	// var currentRot : Vector3 = new Vector3(currentX, currentY, currentZ);
	
	var newRot : Quaternion = Quaternion.Euler(transform.rotation.x + currentX + rotX, 0, 0);
	
	moonRigid.MoveRotation(newRot);
}
