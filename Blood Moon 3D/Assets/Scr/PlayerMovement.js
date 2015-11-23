#pragma strict

private var moon : GameObject;

function Start () {
      moon = GameObject.Find("Moon");
}

function Update () {
      moon.GetComponent.<Rigidbody>().rotation += new Quaternion.euler ( Input.GetAxis ( "Horizontal" ), 0.0, Input.GetAxis ( "Vertical" ) );
}
