<?xml version="1.0" encoding="UTF-8"?>
<model ref="r:ddf3f8e8-413a-437a-bb4d-6bb5202ac5f3(space-demo.build)">
  <persistence version="9" />
  <languages>
    <use id="798100da-4f0a-421a-b991-71f8c50ce5d2" name="jetbrains.mps.build" version="0" />
    <use id="0cf935df-4699-4e9c-a132-fa109541cba3" name="jetbrains.mps.build.mps" version="7" />
  </languages>
  <imports>
    <import index="ffeo" ref="r:874d959d-e3b4-4d04-b931-ca849af130dd(jetbrains.mps.ide.build)" />
  </imports>
  <registry>
    <language id="479c7a8c-02f9-43b5-9139-d910cb22f298" name="jetbrains.mps.core.xml">
      <concept id="6666499814681415858" name="jetbrains.mps.core.xml.structure.XmlElement" flags="ng" index="2pNNFK">
        <property id="6666499814681415862" name="tagName" index="2pNNFO" />
        <child id="1622293396948928802" name="content" index="3o6s8t" />
      </concept>
      <concept id="1622293396948952339" name="jetbrains.mps.core.xml.structure.XmlText" flags="nn" index="3o6iSG">
        <property id="1622293396948953704" name="value" index="3o6i5n" />
      </concept>
    </language>
    <language id="798100da-4f0a-421a-b991-71f8c50ce5d2" name="jetbrains.mps.build">
      <concept id="4993211115183325728" name="jetbrains.mps.build.structure.BuildProjectDependency" flags="ng" index="2sgV4H">
        <reference id="5617550519002745380" name="script" index="1l3spb" />
        <child id="4129895186893471026" name="artifacts" index="2JcizS" />
      </concept>
      <concept id="4380385936562003279" name="jetbrains.mps.build.structure.BuildString" flags="ng" index="NbPM2">
        <child id="4903714810883783243" name="parts" index="3MwsjC" />
      </concept>
      <concept id="6647099934206700647" name="jetbrains.mps.build.structure.BuildJavaPlugin" flags="ng" index="10PD9b" />
      <concept id="7389400916848050071" name="jetbrains.mps.build.structure.BuildLayout_Zip" flags="ng" index="3981dG" />
      <concept id="7389400916848050060" name="jetbrains.mps.build.structure.BuildLayout_NamedContainer" flags="ng" index="3981dR">
        <child id="4380385936562148502" name="containerName" index="Nbhlr" />
      </concept>
      <concept id="7389400916848136194" name="jetbrains.mps.build.structure.BuildFolderMacro" flags="ng" index="398rNT" />
      <concept id="7389400916848153117" name="jetbrains.mps.build.structure.BuildSourceMacroRelativePath" flags="ng" index="398BVA">
        <reference id="7389400916848153130" name="macro" index="398BVh" />
      </concept>
      <concept id="5617550519002745364" name="jetbrains.mps.build.structure.BuildLayout" flags="ng" index="1l3spV" />
      <concept id="5617550519002745363" name="jetbrains.mps.build.structure.BuildProject" flags="ng" index="1l3spW">
        <property id="5204048710541015587" name="internalBaseDirectory" index="2DA0ip" />
        <child id="6647099934206700656" name="plugins" index="10PD9s" />
        <child id="7389400916848080626" name="parts" index="3989C9" />
        <child id="5617550519002745381" name="dependencies" index="1l3spa" />
        <child id="5617550519002745378" name="macros" index="1l3spd" />
        <child id="5617550519002745372" name="layout" index="1l3spN" />
      </concept>
      <concept id="4701820937132344003" name="jetbrains.mps.build.structure.BuildLayout_Container" flags="ng" index="1y1bJS">
        <child id="7389400916848037006" name="children" index="39821P" />
      </concept>
      <concept id="841011766566059607" name="jetbrains.mps.build.structure.BuildStringNotEmpty" flags="ng" index="3_J27D" />
      <concept id="4903714810883702019" name="jetbrains.mps.build.structure.BuildTextStringPart" flags="ng" index="3Mxwew">
        <property id="4903714810883755350" name="text" index="3MwjfP" />
      </concept>
    </language>
    <language id="ceab5195-25ea-4f22-9b92-103b95ca8c0c" name="jetbrains.mps.lang.core">
      <concept id="1169194658468" name="jetbrains.mps.lang.core.structure.INamedConcept" flags="ng" index="TrEIO">
        <property id="1169194664001" name="name" index="TrG5h" />
      </concept>
    </language>
    <language id="0cf935df-4699-4e9c-a132-fa109541cba3" name="jetbrains.mps.build.mps">
      <concept id="6592112598314586625" name="jetbrains.mps.build.mps.structure.BuildMps_IdeaPluginGroup" flags="ng" index="m$f5U">
        <reference id="6592112598314586626" name="group" index="m$f5T" />
      </concept>
      <concept id="6592112598314498932" name="jetbrains.mps.build.mps.structure.BuildMps_IdeaPlugin" flags="ng" index="m$_wf">
        <property id="6592112598314498927" name="id" index="m$_wk" />
        <child id="1359186315025500371" name="xml" index="20twgj" />
        <child id="6592112598314498931" name="version" index="m$_w8" />
        <child id="6592112598314499050" name="content" index="m$_yh" />
        <child id="6592112598314499028" name="dependencies" index="m$_yJ" />
        <child id="6592112598314499021" name="name" index="m$_yQ" />
        <child id="6592112598314855574" name="containerName" index="m_cZH" />
      </concept>
      <concept id="6592112598314498926" name="jetbrains.mps.build.mps.structure.BuildMpsLayout_Plugin" flags="ng" index="m$_wl">
        <reference id="6592112598314801433" name="plugin" index="m_rDy" />
        <child id="3570488090019868128" name="packagingType" index="pUk7w" />
      </concept>
      <concept id="6592112598314499027" name="jetbrains.mps.build.mps.structure.BuildMps_IdeaPluginDependency" flags="ng" index="m$_yC">
        <reference id="6592112598314499066" name="target" index="m$_y1" />
      </concept>
      <concept id="3570488090019868065" name="jetbrains.mps.build.mps.structure.BuildMpsLayout_AutoPluginLayoutType" flags="ng" index="pUk6x" />
      <concept id="1500819558095907805" name="jetbrains.mps.build.mps.structure.BuildMps_Group" flags="ng" index="2G$12M" />
      <concept id="868032131020265945" name="jetbrains.mps.build.mps.structure.BuildMPSPlugin" flags="ng" index="3b7kt6" />
    </language>
  </registry>
  <node concept="1l3spW" id="RDOtZ1fw$0">
    <property role="TrG5h" value="space-demo" />
    <property role="2DA0ip" value="../.." />
    <node concept="10PD9b" id="RDOtZ1fw$1" role="10PD9s" />
    <node concept="3b7kt6" id="RDOtZ1fw$2" role="10PD9s" />
    <node concept="398rNT" id="RDOtZ1fw$3" role="1l3spd">
      <property role="TrG5h" value="mps_home" />
    </node>
    <node concept="398rNT" id="RDOtZ1fw$8" role="1l3spd">
      <property role="TrG5h" value="lionweb-mps.home" />
    </node>
    <node concept="2sgV4H" id="RDOtZ1fw$4" role="1l3spa">
      <ref role="1l3spb" to="ffeo:3IKDaVZmzS6" />
      <node concept="398BVA" id="RDOtZ1fw$5" role="2JcizS">
        <ref role="398BVh" node="RDOtZ1fw$3" resolve="mps_home" />
      </node>
    </node>
    <node concept="1l3spV" id="RDOtZ1fw$p" role="1l3spN">
      <node concept="3981dG" id="RDOtZ1fw$q" role="39821P">
        <node concept="3_J27D" id="RDOtZ1fw$r" role="Nbhlr">
          <node concept="3Mxwew" id="RDOtZ1fw$s" role="3MwsjC">
            <property role="3MwjfP" value="space-demo.zip" />
          </node>
        </node>
        <node concept="m$_wl" id="RDOtZ1fw$t" role="39821P">
          <ref role="m_rDy" node="RDOtZ1fw$c" resolve="space-demo" />
          <node concept="pUk6x" id="RDOtZ1fw$u" role="pUk7w" />
        </node>
      </node>
    </node>
    <node concept="m$_wf" id="RDOtZ1fw$c" role="3989C9">
      <property role="m$_wk" value="spaceDemo" />
      <node concept="3_J27D" id="RDOtZ1fw$d" role="m$_yQ">
        <node concept="3Mxwew" id="RDOtZ1fw$e" role="3MwsjC">
          <property role="3MwjfP" value="space-demo" />
        </node>
      </node>
      <node concept="3_J27D" id="RDOtZ1fw$f" role="m$_w8">
        <node concept="3Mxwew" id="RDOtZ1fw$g" role="3MwsjC">
          <property role="3MwjfP" value="0.1" />
        </node>
      </node>
      <node concept="m$f5U" id="RDOtZ1fw$h" role="m$_yh">
        <ref role="m$f5T" node="RDOtZ1fw$b" resolve="space-demo" />
      </node>
      <node concept="m$_yC" id="RDOtZ1fw$i" role="m$_yJ">
        <ref role="m$_y1" to="ffeo:4k71ibbKLe8" />
      </node>
      <node concept="3_J27D" id="RDOtZ1fw$j" role="m_cZH">
        <node concept="3Mxwew" id="RDOtZ1fw$k" role="3MwsjC">
          <property role="3MwjfP" value="space-demo" />
        </node>
      </node>
      <node concept="2pNNFK" id="RDOtZ1fw$l" role="20twgj">
        <property role="2pNNFO" value="depends" />
        <node concept="3o6iSG" id="RDOtZ1fw$m" role="3o6s8t">
          <property role="3o6i5n" value="com.intellij.modules.platform" />
        </node>
      </node>
    </node>
    <node concept="2G$12M" id="RDOtZ1fw$b" role="3989C9">
      <property role="TrG5h" value="space-demo" />
    </node>
    <node concept="398rNT" id="RDOtZ1fw$F" role="1l3spd">
      <property role="TrG5h" value="space-demo.home" />
    </node>
  </node>
</model>

